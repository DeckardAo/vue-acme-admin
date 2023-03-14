<template>
    <a-sub-menu :key="menuInfo.path">
        <template #icon><mail-outlined /></template>
        <template #title>{{ menuInfo.meta?.title }}</template>
        <template
            v-for="item in menuInfo.children"
            :key="item.key"
        >
            <template v-if="!item.children">
                <a-menu-item :key="item.path">
                    <template #icon>
                        <pie-chart-outlined />
                    </template>
                    {{ item.meta?.title }}
                </a-menu-item>
            </template>
            <template v-else>
                <sub-menu
                    :key="item.path"
                    :menu-info="item"
                />
            </template>
        </template>
    </a-sub-menu>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import {
    PieChartOutlined,
    MailOutlined,
} from '@ant-design/icons-vue';
import { Router } from '@/types/router';

export default defineComponent({
    name: 'SubMenu',
    components: {
        PieChartOutlined,
        MailOutlined,
    },
    props: {
        menuInfo: {
            type: Object as PropType<Router>,
            default: () => ({}),
        },
    },
});
</script>