import { Router } from '@/types/router';
import Home from '@/views/home';

const permissions = ['components', 'dashboard', 'message'];
const componentsRouter: Router[] = [
    {
        path: '/components',
        name: 'components',
        meta: {
            title: '组件',
            icon: '',
            permission: 'components'
        },
        children: [
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
                path: '/message',
                name: 'message',
                meta: {
                    title: '消息提醒',
                    icon: '',
                    permission: 'message'
                },
                component: () => import('@/views/message')
            } 
        ]
    },
];

export default componentsRouter;