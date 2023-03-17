import { render as vueRender, createVNode, VNode } from 'vue';
import { Recorable } from '@/types/types';
import MessageComponent from './Message.vue';

export type messageType = 'success' | 'info' | 'warning' | 'error' | 'loading';
class Message {

    // 结束动画的持续时间 在此时间后 组件元素将从dom树中移除
    private leaveTransitionDuration = 300;
    private static instance: Message | null = null;
    private counter = 0;

    showMessage(message: string, style: Recorable = {}, type: messageType = 'success', duration?: number) {
        this.counter++;

        const div = document.createElement('div');
        document.body.appendChild(div);
        div.classList.add('acme-message-box');

        const messageStyle = {top: (60 * this.counter) + 'px'};
        const vm = createVNode(MessageComponent, {message, type, duration, style: messageStyle});

        const styleKeys = Object.keys(style);
        styleKeys.forEach((key: string) => {
            // @ts-ignore
            div.style[key] = style[key];
        });
    
    
        if (duration && duration != 0) {
            // 持续时间结束后开始关闭动画
            setTimeout(() => {
                vueRender(null, div);
                this.counter--;
                document.body.removeChild(div);
            }, duration + this.leaveTransitionDuration);
        }
    
        vueRender(vm, div);
    }

    static getInstance() {
        if (Message.instance !== null) return Message.instance;

        Message.instance = new Message();
        return Message.instance;

    }
}


function showMessage(message: string, style: Recorable = {}, type: messageType = 'success', duration?: number) {
    
    const vm = createVNode(MessageComponent, {message, type});
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
            vueRender(null, div);
        }, duration);
    }

    vueRender(vm, div);
}


export function success(message: string):void;
export function success(message: string, duration: number):void;
export function success(message: string, duration?: number):void{
    Message.getInstance().showMessage(message, {}, 'success', duration || 2000);
}


export function error(message: string):void;
export function error(message: string, duration: number):void;
export function error(message: string, duration?: number):void {
    Message.getInstance().showMessage(message, {}, 'error', duration || 2000);
}

export interface MessageInterface {
    success(message: string, duration?:number): void;
    error(message: string, duration?:number): void;
}

const MessageIns: MessageInterface = {
    success,
    error
};

export default MessageIns;