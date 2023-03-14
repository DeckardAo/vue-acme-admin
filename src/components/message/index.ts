import { defineComponent, render as vueRender, PropType, h, VueElement } from 'vue';
import './style.less';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons-vue';
import { Recorable } from '@/types/types';


type messageType = 'success' | 'info' | 'warning' | 'error' | 'loading';

const MessageComponent = defineComponent({
    props: {
        type: {
            type: String as PropType<string>,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    },
    render() {
        const { message } = this;

        const messageIconMap : Record<string, unknown> = {
            success: CheckCircleOutlined,
            error: CloseCircleOutlined,
        };

        return h('div', 
            {class: `acme-message acme-message-${this.type}`},
            {default: () => [
                h(messageIconMap[this.type] as VueElement),
                h('span',{style: 'margin-left: 10px'}, message)
            ]}
        );
    }
});


function showMessage(message: string, style: Recorable = {}, type: messageType = 'success', duration?: number) {
    const vm = h(MessageComponent, {message, type}, {default: () => message});
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
export function success(message: string):void;
export function success(message: string, duration: number):void;
export function success(message: string, duration?: number):void{
    showMessage(message, {}, 'success', duration || 2000);
}


export function error(message: string):void;
export function error(message: string, duration: number):void;
export function error(message: string, duration?: number):void {
    showMessage(message, {}, 'error', duration || 2000);
}

export interface MessageInterface {
    success(message: string, duration?:number): void;
    error(message: string, duration?:number): void;
}

const Message: MessageInterface = {
    success,
    error
};

export default Message;