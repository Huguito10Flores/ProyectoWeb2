import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Pestaña1 from './components/Pestaña1.vue';
import Pestaña2 from './components/Pestaña2.vue';
import pestaña3 from './components/Pestaña3.vue';

const routes = [
  { path: '/', component: Pestaña1 }, 
  { path: '/pestaña1', component: Pestaña1 },
  { path: '/pestaña2', component: Pestaña2 },
  { path: '/pestaña3', component: pestaña3 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount('#app');
