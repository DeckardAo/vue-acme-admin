import { Router } from '@/types/router';
import { RouteRecordRaw } from 'vue-router';

const permissions: string[] = ['dashboard'];

export function parseRouter(routers: Router[]) {

    function parase(routes: Router[]): RouteRecordRaw[] {
        const res: RouteRecordRaw[] = [];
        routes.map(route => {
            if (route.meta && route.meta.permission) {
                // 权限校验                
                if (permissions.includes(route.meta.permission)) {
                    if (!route.children || route.children.length === 0) {
                        res.push(route as RouteRecordRaw);
                
                    } else {

                        // 递归调用
                        const item: RouteRecordRaw = route as RouteRecordRaw;
                        item.children = parase(route.children);
                    }
                }
            } else if(route.children && route.children.length > 0) {
                // 递归调用
                const item: RouteRecordRaw = route as RouteRecordRaw;
                item.children = parase(route.children);
                res.push(item as RouteRecordRaw);
               
            } else {
                res.push(route as RouteRecordRaw);
            }
        });

        return res;
    }

    return parase(routers);
}