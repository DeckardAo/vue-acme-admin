import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'; 
import { parseRouter } from '@/utils/routerUtil';
import asyncRouter from '@/router/routes.async';
import { useSettingsStore } from '@/store/modules/settings';
import store from '@/store';
import Layout from '@/layout';


const routes: RouteRecordRaw[] = parseRouter(asyncRouter);
console.log(routes);


const defaultRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Layout',
        meta: {},
        component: Layout,
        redirect: routes[0].path,
        children: routes
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/errors/404.vue')
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/404'
    }
];

useSettingsStore(store).setMenus( routes);

export default createRouter({
    history: createWebHistory(),
    routes: [...routes, ...defaultRoutes]
});