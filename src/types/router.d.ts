
export interface RouterMeta {
    title?: string;
    icon?: string;
    permission?: string;
    isMenu?: boolean;
}


export interface Router {
    path: string;
    name: string; 
    meta?: RouterMeta;
    redirect?: string;
    component: any;
    children?: Router[];
}