import Vue from 'vue';
import VueRouter from 'vue-router';
import Orders from '@/views/Orders';
import CreateOrder from '@/views/CreateOrder';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Orders',
        component: Orders,
    },
    {
        path: '/create-order',
        name: 'CreateOrder',
        component: CreateOrder,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: import.meta.env.BASE_URL,
    routes,
});

export default router;
