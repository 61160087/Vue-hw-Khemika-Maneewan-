import {
  createRouter,
  createWebHistory,
} from 'vue-router/dist/vue-router.esm-bundler';
import Portfolio from './pages/portfolio.vue';
import Contact from './pages/contact.vue';

const routes = [
  { path: '/', name: 'Portfolio', component: Portfolio },
  { path: '/Contact', name: 'Contact', component: Contact },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
