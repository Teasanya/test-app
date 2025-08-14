import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/HomeView.vue'),
    meta: { title: 'Пользователи' },
  },
  {
    path: '/users/:id',
    name: 'user',
    component: () => import('../views/UsersView.vue'),
    meta: { title: 'Карточка пользователя' },
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
