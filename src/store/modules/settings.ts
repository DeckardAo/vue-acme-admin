import { defineStore } from 'pinia';
import store from '@/store';
import { RouteRecordRaw } from 'vue-router';


export const useSettingsStore = defineStore('settings', {
    state: (): Record<string, any> => ({
        appName: '',
        menus: []
    }),

    actions: {
        setAppName(appName: string) {
            this.appName = appName;
        },

        setMenus(menus: RouteRecordRaw[]) {
            this.menus = menus;
        }
    }
});

export function getSettingsStore() {
    return useSettingsStore(store);
}