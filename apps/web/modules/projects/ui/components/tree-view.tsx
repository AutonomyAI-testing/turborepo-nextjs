import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@workspace/design-system/components/ui/collapsible";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarProvider,
	SidebarRail,
} from "@workspace/design-system/components/ui/sidebar";
import { ChevronRightIcon, FileIcon, FolderIcon } from "lucide-react";
import type { TreeItem } from "@/types/code";

type TreeProps = {
	item: TreeItem;
	selectedValue?: string | null;
	onSelect: (value: string) => void;
	parentPath: string;
};

const Tree = ({ item, onSelect, selectedValue, parentPath }: TreeProps) => {
	const [name, ...items] = Array.isArray(item) ? item : [item];
	const currentPath = parentPath ? `${parentPath}/${name}` : name;

	if (!items.length) {
		// It's a file
		const isSelected = selectedValue === currentPath;

		return (
			<SidebarMenuButton
				className="data-[active=true]:bg-transparent"
				isActive={isSelected}
				onClick={() => onSelect(currentPath)}
			>
				<FileIcon />
				<span className="truncate">{name}</span>
			</SidebarMenuButton>
		);
	}

	// It's a directory
	return (
		<SidebarMenuItem>
			<Collapsible
				className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
				defaultOpen
			>
				<CollapsibleTrigger asChild>
					<SidebarMenuButton>
						<ChevronRightIcon className="transition-transform" />
						<FolderIcon />
						<span className="truncate">{name}</span>
					</SidebarMenuButton>
				</CollapsibleTrigger>
				<CollapsibleContent>
					<SidebarMenuSub>
						{items.map((subItem) => {
							const subName = Array.isArray(subItem) ? subItem[0] : subItem;
							return (
								<Tree
									item={subItem}
									key={subName}
									onSelect={onSelect}
									parentPath={currentPath}
									selectedValue={selectedValue}
								/>
							);
						})}
					</SidebarMenuSub>
				</CollapsibleContent>
			</Collapsible>
		</SidebarMenuItem>
	);
};

type Props = {
	data: TreeItem[];
	value?: string | null;
	onSelect: (value: string) => void;
};

export const TreeView = ({ data, onSelect, value }: Props) => {
	return (
		<SidebarProvider>
			<Sidebar className="w-full" collapsible="none">
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupContent>
							<SidebarMenu>
								{data.map((item) => {
									const itemName = Array.isArray(item) ? item[0] : item;
									return (
										<Tree
											item={item}
											key={itemName}
											onSelect={onSelect}
											parentPath=""
											selectedValue={value}
										/>
									);
								})}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				</SidebarContent>
				<SidebarRail />
			</Sidebar>
		</SidebarProvider>
	);
};
