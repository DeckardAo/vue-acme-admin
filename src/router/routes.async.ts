import { Router } from '@/types/router';

import Home from '@/views/home';

const routes: Router[] = [
    {
        path: '/dashboard',
        name: 'home',
        meta: {
            title: '仪表盘',
            icon: '',
            permission: 'dashboard'
        },
        component: Home
    },
    {
        path: '/test',
        name: 'test',
        meta: {
            title: '测试',
            icon: '',
            permission: 'test'
        },
        component: Home
    }    
];


export default routes;