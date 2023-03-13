<template name="SideMenu">
    <div class="w-248px overflow-y-auto">
        <a-menu
            v-model:openKeys="openKeys"
            v-model:selectedKeys="selectedKeys"
            mode="inline"
            theme="dark"
            :inline-collapsed="collapsed"
        >
            <a-menu-item
                v-for="item in menus"
                :key="item.path"
                :icon="item.meta.icon"
            >
                <template #icon>
                    <MailOutlined />
                    <check-circle-outlined />
                </template>
                {{ item.meta.title }}
            </a-menu-item>
        </a-menu>
    </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useSettingsStore } from '@/store';
import Message from '@/components/message';
import { CheckCircleOutlined, MailOutlined } from '@ant-design/icons-vue';

const openKeys = ref([]);
const selectedKeys = ref([]);
const collapsed = ref(false);

const settingsStore = useSettingsStore();

const menus = computed(() => settingsStore.menus);

setTimeout(() => {
    Message.success('我你爹');
}, 1000); 

setTimeout(() => {
    Message.error('傻逼吧你');
}, 4000); 


</script>
<style lang="less" scoped>
.side-menu {
    width: 248px;
}
</style>