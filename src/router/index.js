import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllLeads from '../views/home/AllLeads.vue'
import MasterInbox from '../views/home/MasterInbox.vue'
import EmailCampaigns from '../views/home/EmailCampaigns.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'all-leads',
          component: AllLeads
        },
        {
          path: 'master-inbox',
          component: MasterInbox
        },
        {
          path: 'email-campaigns',
          component: EmailCampaigns
        }
      ],
    },
  ]
})

export default router
