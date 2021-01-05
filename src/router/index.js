import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Anmelden from '@/components/Anmelden'
import HomeView from '@/components/HomeView'
import ProduktView from '@/components/ProduktView'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,

    },
    {
      path: '/Anmelden',
      name: 'Anmelden',
      component: Anmelden,
    },
    {
      path: '/HomeView',
      name: 'HomeView',
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/ProduktView',
      name: 'ProduktView',
      component: ProduktView,
    },
   
  ]
});

router.beforeEach((to, from, next) => {
  //Check for requiredAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //Check if not logged in
    if (!firebase.auth().currentUser) {
      //Go to login 
      next({
        path: '/login',
        querry: {
          redirect: to.fullPath
        }
      });
    }
    else {
      //Proceed to route
      next();
    }
  }
  else if (to.matched.some(record => record.meta.requiresGuest)) {
    //Check if not logged in
    if (!firebase.auth().currentUser) {
      //Go to login 
      next({
        path: '/HomeView',
        querry: {
          redirect: to.fullPath
        }
      });
    }
    else {
      //Proceed to route
      next();
    }

    
  }
  else {
    next();
  }
});

export default router;

