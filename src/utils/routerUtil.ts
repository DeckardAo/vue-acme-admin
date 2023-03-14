import { Router } from '@/types/router';
import { RouteRecordRaw } from 'vue-router';

const permissionList: string[] = ['components', 'message'];

export function parseRouter(componentsRouter: Router[]): RouteRecordRaw[] {

    const removeRouterByPermission = (routers: Router[], permissions: string[]) => { 
        routers.forEach(router => { 
            if (router.meta && router.meta.permission && !permissions.includes(router.meta.permission)) {
                routers.splice(routers.indexOf(router), 1); 
            } 
            if (router.children && router.children.length > 0) { 
                removeRouterByPermission(router.children, permissions); 
            } 
        });
    }; 
     
    removeRouterByPermission(componentsRouter, permissionList);

    return componentsRouter as RouteRecordRaw[];
}