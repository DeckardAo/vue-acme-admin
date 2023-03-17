<template>
    <div>
        <Transition name="message-down">
            <div
                v-show="showMessage"
                :style="style"
                :class="`acme-message acme-message-${type}`"
            >
                <component :is="typeIconMap[type]" />
                <span
                    style="margin-left: 10px;"
                    v-html="message"
                />
            </div>
        </Transition>
    </div>
</template>
<script lang="ts">
export default {
    name: 'Messsage'
};
</script>
<script lang="ts" setup>
import { onMounted, ref, toRefs, PropType } from 'vue';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons-vue';

const typeIconMap: Record<string, unknown> = {
    'success': CheckCircleOutlined,
    'error': CloseCircleOutlined
};

type messageType = 'success' | 'info' | 'warning' | 'error' | 'loading';
const props = defineProps({
    message: {
        type: String as PropType<string>,
        default: ''
    },
    type: {
        type: String as PropType<messageType>,
        default: 'success'
    },
    style: {
        type: Object as PropType<Record<string, string>>,
        default: () => ({}),
        required: false
    },
    duration: {
        type: Number as PropType<number>,
        default: 2000,
        required: false
    }
});



const { message, type, style, duration } = toRefs(props);

const showMessage = ref(false);
onMounted(() => {
    showMessage.value = true;

    setTimeout(() => {
        showMessage.value = false;
    }, duration.value);

});
</script>
<style lang="less" scoped>
.acme-message {
    width: 300px;
    height: 50px;
    position: fixed;
    z-index: 9999;
    left: 50%;
    margin-left: -150px;
    top: 25px;
    line-height: 50px;
    padding: 0 25px;
    border: 1px solid #e4e4e4;
    background: #f5f5f5;
    color: #999;
    border-radius: 4px;
}

.acme-message-success {
    color: #67C23A;
    background-color: rgb(240, 249, 235);
    border-color: rgb(225, 243, 216);
}

.acme-message-error {
    background-color: rgb(254, 240, 240);
    color: #F56C6C;
    border-color: rgb(253, 226, 226);
}

.message-down {
    &-enter {
        &-from {
            transform: translate3d(0, -75px, 0);
            opacity: 0;
        }

        &-active {
            transition: all 0.3s;
        }

        &-to {
            transform: none;
            opacity: 1;
        }
    }

    &-leave {
        &-from {
            transform: none;
            opacity: 1;
        }

        &-active {
            transition: all 0.3s;
        }

        &-to {
            transform: translate3d(0, -75px, 0);
            opacity: 0;
        }
    }
}
</style>