import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const Vue = createApp(App)
Vue.use(router) // Adicionando as configurações de rota do a instância do vue
Vue.mount('#app')
