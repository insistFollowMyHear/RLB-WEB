import { createApp } from 'vue'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'

import { Divider, Row, Col } from 'ant-design-vue'

const app = createApp(App)
app.use(router)
app.use(Divider)
app.use(Row)
app.use(Col)
app.mount('#app')
