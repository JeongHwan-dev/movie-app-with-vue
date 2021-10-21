import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '~/views/Home';
import Movie from '~/views/Movie';
import About from '~/views/About';

export default createRouter({
  history: createWebHashHistory(),
  
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/moive/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    }
  ]
});