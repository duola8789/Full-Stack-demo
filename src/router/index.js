import Vue from 'vue'
import Router from 'vue-router'
import JWT from 'jsonwebtoken';
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import config from '../../config/common';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      name: 'index',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }
  ]
});

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('userToken');
  const isTokenRight = !!(token && JWT.decode(token) && (JWT.decode(token).iss === config.userToken.iss));
  if (to.path === '/admin') {
    if (isTokenRight) {
      next()
    } else {
      next('/login')
    }
  } else if (to.path === '/login') {
    if (isTokenRight) {
      next('/admin')
    } else {
      next()
    }
  } else {
    next()
  }
});

export default router;
