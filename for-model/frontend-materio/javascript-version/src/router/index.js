import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from '~pages'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        path: '/companies',
        name: 'companies',
        component: () => import('../views/components/ui/CompanyGrid.vue'),
    },
    {
      path: '/sales',
      name: 'salesOrders',
      component: () => import('../views/components/ui/SalesOrderGrid.vue'),
    },
    ...setupLayouts(routes),
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})
export default router
