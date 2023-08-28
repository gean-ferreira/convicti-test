import { createPinia } from 'pinia'
import router from '@/router'
// VEE VALIDADE
// VUE-MULTISELECT

export function applyPlugins(app) {
  app.use(createPinia())
  app.use(router)
}
