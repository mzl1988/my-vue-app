import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '../pages/Home/Home.vue'),
        meta: { requiredLogin: true },
        children: [
            //   {
            //     path: '/',
            //     name: 'Welcome',
            //     component: () => import(/* webpackChunkName: "welcome" */ '../views/Welcome.vue')
            //   },
            //   {
            //     path: '/about',
            //     name: 'About',
            //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
            //   }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../pages/Login/Login.vue'),
        meta: { redirectAlreadyLogin: true }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    //   const userModule = getModule(UserModule);

    //   const { redirectAlreadyLogin } = to.meta;
    //   if (userModule.user.isLogin) {
    //     axios.defaults.headers.common.Authorization = `Bearer ${userModule.user.token}`
    //     next()
    //   } else {
    //     if (redirectAlreadyLogin) {
    //       next()
    //     } else {
    //       next('login')
    //     }
    //   }
    next()
})


export default router
