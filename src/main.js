
import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';        
Vue.use(VueAxios, axios);

import CreateItem from './components/CreateItem.vue';
import DisplayItem from './components/DisplayItem.vue';
import EditItem from './components/EditItem.vue';
import FrequentItem from './components/DisplayFreItem.vue';

const routes = [
        {
            name: 'CreateItem',
            path: '/create/item',
            component: CreateItem
        },
        {
            name: 'DisplayItem',
            path: '/',
            component: DisplayItem
        },
        {
            name: 'EditItem',
            path: '/edit/:id',
            component: EditItem
        },
        {
            name: 'FrequentItem',
            path: '/frequentItem',
            component: FrequentItem
        }
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
