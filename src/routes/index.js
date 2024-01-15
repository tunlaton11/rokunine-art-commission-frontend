import { createRouter, createWebHistory } from 'vue-router'

// nested style but will make sidebar menu selected does not work
// const routes = [
//   {
//     component: () => import('@/components/FullLayout.vue'),
//     children: [
//       {
//         name: 'Dashboard',
//         path: '/dashboard',
//         component: () => import('@/views/Dashboard.vue')
//       },
//     ]
//   }
// ]

const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: () => import('@/views/Dashboard.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})


