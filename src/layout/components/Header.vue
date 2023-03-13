<template name="Header">
    <div
        class="w-[calc(100vw-248px)] h-56px bg-white pl-10 pr-10 flex justify-between items-center"
        style="border-bottom: 1px solid #EEE;"
    >   
        <div class="flex items-center h-56px">
            <a-input
                v-model:value="userName"
                placeholder="请输入搜索内容"
                class="w-200px"
            >
                <template #prefix>
                    <search-outlined type="user" />
                </template>
            </a-input>
        </div>
        <div>
            <a-space :size="20">
                <a-badge count="5">
                    <a-button
                        shape="circle"
                    >
                        <template #icon><mail-outlined /></template>
                    </a-button>
                </a-badge>
                <a-button
                    shape="circle"
                >
                    <template #icon><github-outlined /></template>
                </a-button>
                <a-button
                    shape="circle"
                >
                    <template #icon><question-outlined /></template>
                </a-button>
                <a-button
                    shape="circle"
                >
                    <template #icon><setting-outlined /></template>
                </a-button>
            </a-space>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    name: 'Header'
};
</script>

<script lang="ts" setup>
import { ref } from 'vue'; 
import {SearchOutlined, MailOutlined, GithubOutlined, QuestionOutlined, SettingOutlined} from '@ant-design/icons-vue';

const userName = ref<string>('');
</script>