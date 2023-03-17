<template name="SideMenu">
    <div class="w-248px overflow-y-auto">
        <a-menu
            v-model:openKeys="openKeys"
            v-model:selectedKeys="selectedKeys"
            mode="inline"
            theme="dark"
            :inline-collapsed="collapsed"
            @click="onMenuChange"
        >
            <template
                v-for="item in menus"
                :key="item.key"
            >
                <template v-if="!item.children">
                    <a-menu-item :key="item.path">
                        <template #icon>
                            <PieChartOutlined />
                        </template>
                        {{ item.meta.title }}
                    </a-menu-item>
                </template>
                <template v-else>
                    <Submenu
                        :key="item.path"
                        :menu-info="item"
                    />
                </template>
            </template>
        </a-menu>
    </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useSettingsStore } from '@/store';
import { useRouter } from 'vue-router';
import Submenu from './Submenu.vue';
import { PieChartOutlined } from '@ant-design/icons-vue';

const openKeys = ref([]);
const selectedKeys = ref([]);
const collapsed = ref(false);

const settingsStore = useSettingsStore();

const menus = computed(() => settingsStore.menus);

const $router = useRouter();
const onMenuChange = ({ item, key, keyPath }: Record<string, string>) => {
    $router.push(key);
};
</script>
<style lang="less" scoped>
.side-menu {
    width: 248px;
}
</style>