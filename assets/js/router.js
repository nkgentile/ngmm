'use strict';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            name: 'home',
            path: '/',
            alias: '/home',
            component: Home
        },
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            name: 'projects',
            path: '/projects',
            component: Portfolio
        },
        {
            name: 'project',
            path: '/projects/:name',
            component: Project
        }
    ]
});
