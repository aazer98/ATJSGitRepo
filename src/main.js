import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue'
import Pokedex from './pages/Pokedex.vue'
import Calculator from './pages/Calculator.vue'

const routes = [
    {   path: '/', component: Home },
    {   path: '/pokedex', component: Pokedex },
    {   path: '/calculator', component: Calculator },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});


const app = createApp({})
app.use(router)
app.mount('#app')


