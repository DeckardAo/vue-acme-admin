import { createApp } from 'vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.less';
import router from './router';
import 'virtual:windi.css';
import store from './store';


const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');