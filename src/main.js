import { createApp, markRaw } from 'vue'
import App from '~/App.vue'
import router from '~/routes'
import '~/routes/guards'
import { createPinia } from 'pinia'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const pinia = createPinia()
pinia.use(({ store }) => {
  store.$router = markRaw(router)
})

createApp(App)
  .use(pinia)
  .use(router)
  .use(VueSweetalert2)
  .mount('#app')
