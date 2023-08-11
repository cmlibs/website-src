import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/main.css'
import './assets/doxygen.css'
import './assets/general.css'
import './assets/sphinx.css'

import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'

import { installVue3DoxygenXml } from 'vue3-doxygen-xml'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(installVue3DoxygenXml)
app.use(WaveUI, {
  breakpoints: {
    xs: 400,
    sm: 640,
    md: 1007,
    lg: 2400
    // Xl doesn't need to be overridden:
    // it always starts from lg & goes to infinity.
  }
})

app.mount('#app')
