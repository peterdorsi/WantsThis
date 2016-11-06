// {
//   path: '/profile',
//   auth: true,
//   meta: {
//     requiresAuth: true
//   },
//   component: resolve => require(['views/Account/Profile.vue'], resolve)
// },

import Home from '../components/Home.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['components/Account/Login.vue'], resolve)
  },
  {
    path: '*',
    component: resolve => require(['components/404.vue'], resolve)
  }
]

export default routes
