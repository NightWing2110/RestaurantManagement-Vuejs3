import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Loggin from './components/Loggin.vue'
import AddRestaurant from './components/AddRestaurant.vue'
import UpdateRestaurant from './components/UpdateRestaurant.vue'

const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'Loggin',
        component: Loggin,
        path: '/login'
    },
    {
        name: 'Add',
        component: AddRestaurant,
        path: '/add-restaurant'
    },
    {
        name: 'Update',
        component: UpdateRestaurant,
        path: '/update-restaurant'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;