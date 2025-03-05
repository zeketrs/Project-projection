import { createRouter, createWebHistory } from 'vue-router'
import CardListView from '../views/CardListView.vue'
import CardDetailsView from '../views/CardDetailsView.vue'
import HomeView from '../views/HomeView.vue'
import DeckListView from '@/views/DeckListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cards',
      name: 'card-list',
      component: CardListView,
    },
    {
      path: '/deck',
      name: 'deck-list',
      component: DeckListView,
    },
    {
      path: '/cards/:id',
      name: 'card-details',
      props: true,
      component: CardDetailsView,
    },
  ],
})

export default router
