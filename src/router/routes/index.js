export const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/logged_in/Home.vue'),
        meta: {
          // PERMISSION | AUTH
        }
      },
      {
        path: '/empresas',
        name: 'companies',
        component: () => import('@/views/logged_in/Companies.vue'),
        meta: {
          // PERMISSION | AUTH
        }
        // GET ALLCOMPANIES ANTES DE ENTRAR NA PAGINA
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      // AUTH
    }
  }
]
