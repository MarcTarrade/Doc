import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DocumentsView from '../views/DocumentsView.vue'
import EstateView from '../views/EstateView.vue'
import SignInView from '../views/SignInView.vue'
import auth from '../middleware/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        middleware: auth
      }
    },
    {
      path: '/documents',
      name: 'documents',
      component: DocumentsView,
      meta: {
        middleware: auth
      }
    },
    {
        path: '/estate',
        name: 'estate',
        component: EstateView,
        meta: {
          middleware: auth
        }
    },
    {
        path: '/signin',
        name: 'signin',
        component: SignInView,
        meta: {
            hideNavBar: true
        }
    }
  ]
})


function nextFactory(context, middleware, index) {
      const subsequentMiddleware = middleware[index];
      
      if (!subsequentMiddleware) return context.next;
    
      return (...parameters) => {
       
        context.next(...parameters);
        const nextMiddleware = nextFactory(context, middleware, index + 1);
        subsequentMiddleware({ ...context, next: nextMiddleware });
      };
}
    
router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
        ? to.meta.middleware
        : [to.meta.middleware];

    const context = {
        from,
        next,
        router,
        to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
    }

    return next();
});
    

export default router
