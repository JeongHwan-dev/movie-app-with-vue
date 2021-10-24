import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '~/views/Home';
import Movie from '~/views/Movie';
import About from '~/views/About';
import NotFound from '~/views/NotFound';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
});