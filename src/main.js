import Vue from 'vue'
import {Row,Col,Container,Header,Main,Button,Input,Upload,Message} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'

Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Button);
Vue.use(Input);
Vue.use(Upload);
Vue.component(Message);
Vue.config.productionTip = false;
Vue.prototype.$message = Message;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
