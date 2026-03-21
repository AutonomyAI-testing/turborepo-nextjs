"use client";

import { Badge } from "@workspace/design-system/components/ui/badge";
import { Button } from "@workspace/design-system/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@workspace/design-system/components/ui/dropdown-menu";
import { cn } from "@workspace/design-system/lib/utils";
import { Bell } from "lucide-react";
import { useState } from "react";

type Notification = {
	id: string;
	title: string;
	timestamp: Date;
	read: boolean;
};

// Mock data for demonstration. In production, this should be replaced with real
// notification data from an API or state management system (e.g., useQuery, Redux).
const MOCK_NOTIFICATIONS: Notification[] = [
	{
		id: "1",
		title: "New message from team",
		timestamp: new Date(Date.now() - 5 * 60_000),
		read: false,
	},
	{
		id: "2",
		title: "Project update available",
		timestamp: new Date(Date.now() - 2 * 3600_000),
		read: false,
	},
	{
		id: "3",
		title: "Welcome to the platform",
		timestamp: new Date(Date.now() - 24 * 3600_000),
		read: true,
	},
	{
		id: "4",
		title: "Your profile was updated",
		timestamp: new Date(Date.now() - 48 * 3600_000),
		read: true,
	},
	{
		id: "5",
		title: "New feature released",
		timestamp: new Date(Date.now() - 72 * 3600_000),
		read: true,
	},
];

/**
 * Formats a date into a human-readable relative time format.
 * Returns strings like "5 min ago", "2 hours ago", etc.
 * Falls back to locale date string for dates older than 7 days.
 *
 * Note: This function creates a new Date() on every call, which is acceptable
 * for UI display purposes but should not be used in performance-critical loops.
 */
function getRelativeTime(date: Date): string {
	const now = new Date();
	const diffMs = now.getTime() - date.getTime();
	const diffMins = Math.floor(diffMs / 60_000);
	const diffHours = Math.floor(diffMs / 3600_000);
	const diffDays = Math.floor(diffMs / 86400_000);

	if (diffMins < 1) return "just now";
	if (diffMins < 60) return `${diffMins} min ago`;
	if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
	if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;

	return date.toLocaleDateString();
}

function NotificationItem({
	notification,
	onMarkAsRead,
}: {
	notification: Notification;
	onMarkAsRead: (id: string) => void;
}) {
	return (
		<button
			type="button"
			onClick={() => onMarkAsRead(notification.id)}
			className="w-full px-2 py-1.5 text-left hover:bg-accent cursor-pointer rounded-sm transition-colors"
			aria-label={`Mark ${notification.title} as read`}
		>
			<div className="flex items-start justify-between">
				<p className={cn("text-sm", !notification.read && "font-medium")}>
					{notification.title}
				</p>
				{!notification.read && (
					<div className="ml-2 mt-0.5 size-2 bg-primary rounded-full shrink-0" />
				)}
			</div>
			<p className="text-xs text-muted-foreground mt-1">
				{getRelativeTime(notification.timestamp)}
			</p>
		</button>
	);
}

export const NotificationBell = () => {
	const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

	const unreadCount = notifications.filter((n) => !n.read).length;

	const handleMarkAsRead = (id: string) => {
		setNotifications((prev) =>
			prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
		);
	};

	const handleMarkAllAsRead = () => {
		setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					aria-label="Notifications"
					className="relative"
				>
					<Bell className="size-4" />
					{unreadCount > 0 && (
						<Badge
							variant="destructive"
							className="absolute -top-1 -right-1 text-xs"
							aria-label={`${unreadCount} unread notifications`}
						>
							{unreadCount}
						</Badge>
					)}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel>Notifications</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{notifications.length === 0 ? (
					<div className="px-2 py-8 text-center text-sm text-muted-foreground">
						No notifications
					</div>
				) : (
					<>
						{notifications.map((notification) => (
							<NotificationItem
								key={notification.id}
								notification={notification}
								onMarkAsRead={handleMarkAsRead}
							/>
						))}
						<DropdownMenuSeparator />
						{unreadCount > 0 && (
							<DropdownMenuItem onClick={handleMarkAllAsRead}>
								Mark all as read
							</DropdownMenuItem>
						)}
					</>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
