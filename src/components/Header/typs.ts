export interface MenuItemInfoType {
   name: string;
   menuChildren: MenuItemChild[];
   isActive: boolean;
   url: string;
}

export interface MenuItemChild {
   label: string;
   url: string;
}