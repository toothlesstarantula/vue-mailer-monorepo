import { createWebHistory, createRouter } from 'vue-router'

import Home from '../pages/Home.vue';
import MailerTemplates from '../pages/MailTemplate.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/templates/hello', component: MailerTemplates },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})