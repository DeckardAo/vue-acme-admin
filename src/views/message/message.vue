<template>
    <div class="bg-white h-[calc(100vh-128px)] p-5">
        <i>个人觉得-antd的消息提醒组件太小，不够醒目，所以自己封装了一个，antd的组件也可在本系统中使用，可自行选择使用哪个😁😁😁😁</i>
        <div class="m-10" />

        <a-card title="Antd的消息提醒">
            <a-space>
                <a-button
                    type="primary"
                    @click="onAntdSuccess"
                >
                    成功提示
                </a-button>
                <a-button
                    danger
                    @click="onAntdError"
                >
                    错误提示
                </a-button> 
            </a-space>
        </a-card>

        <a-card
            title="Acme的消息提醒"
            style="margin-top: 10px;"
        >
            <a-space>
                <a-button
                    type="primary"
                    @click="onSuccess"
                >
                    成功提示
                </a-button>
                <a-button
                    type="primary"
                    @click="onHtmlSuccess"
                >
                    自定义HTML的成功提示
                </a-button>
                <a-button
                    danger
                    @click="onError"
                >
                    错误提示
                </a-button>
            </a-space>
        </a-card>
    </div>
</template>
<script lang="ts">
export default {
    name: 'Message'
};
</script>
<script lang="ts" setup>
import Message from '@/components/message';
import { message } from 'ant-design-vue';

const onSuccess = () => {
    Message.success('成功提示');
};

const onHtmlSuccess = () => {
    Message.success('<span class="text-red-600">自定义HTML的成功提示</span>');
};

const onError = () => {
    Message.error('错误提示');
};

const onAntdSuccess = () => {
    message.success('成功提示');
};

const onAntdError = () => {
    message.error('错误提示');
};
</script>