import { createPinia } from 'pinia'
import router from '@/router'

export function applyPlugins(app) {
  app.use(createPinia())
  app.use(router)
}
