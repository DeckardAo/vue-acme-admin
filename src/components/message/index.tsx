import { defineComponent, render as vueRender, createVNode, CSSProperties, PropType } from 'vue';
import './style.less';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons-vue';
import { Recorable } from '@/types/types';


type messageType = 'success' | 'info' | 'warning' | 'error' | 'loading';

const MessageComponent = defineComponent({
    props: {
        type: {
            type: Object as PropType<messageType>,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    },
    render() {
        return <div className={`acme-message acme-message-${this.type}`}>
            {
                this.type === 'success'? <CheckCircleOutlined /> : ''
            }
            {
                this.type === 'error'? <CloseCircleOutlined /> : ''
            }
            { this.message }
        </div>;
    }
});


function showMessage(message: string, style: Recorable = {}, type: messageType = 'success', duration?: number) {
    const vm = createVNode(MessageComponent, {message, type}, message);
    const div = document.createElement('div');
    document.body.appendChild(div);

    const styleKeys = Object.keys(style);
    styleKeys.forEach((key: string) => {
        // @ts-ignore
        div.style[key] = style[key];
    });


    div.classList.add('acme-message-box');

    if (duration && duration != 0) {
        // 持续时间结束后开始关闭动画
        setTimeout(() => {
            div.classList.add('hide');
            // 动画结束后销毁元素
            setTimeout(() => {
                document.body.removeChild(div);
            }, 300);

        }, duration);
    }

    vueRender(vm, div);
}

export function success(message: string) {
    showMessage(message, {}, 'success', 2000);
}

export function error(message: string) {
    showMessage(message, {}, 'error', 2000);
}

export interface MessageInterface {
    success(message: string): void;
    error(message: string): void;
}

const Message: MessageInterface = {
    success,
    error
};

export default Message;