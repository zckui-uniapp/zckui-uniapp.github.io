import { createSSRApp } from 'vue'
import App from './App.vue'
import '@nutui/touch-emulator'
import 'virtual:uno.css'
import './main.scss'
import './styles/app.scss'

export function createApp() {
  const app = createSSRApp(App)

  return {
    app,
  }
}
