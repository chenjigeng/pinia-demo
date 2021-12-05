import { createPinia } from 'pinia';
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

const pinia = createPinia();

pinia.use((context) => {
  return {
    name: 'cjg'
  }
})

app.use(pinia);

app.mount('#app')
