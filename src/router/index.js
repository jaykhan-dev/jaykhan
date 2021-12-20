import { createWebHistory, createRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Catalog from '../views/Catalog.vue'
import Contact from '../views/Contact.vue'
import Collab from '../views/Collab.vue'
import Musicplayer from '../components/musicplayer.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/catalog', name: 'Catalog', component: Catalog },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/collab', name: 'Collab', component: Collab },
    { path: '/musicplayer/:id', name: 'Musicplayer', component: Musicplayer },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router