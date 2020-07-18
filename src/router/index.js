import Vue from 'vue'
import VueRouter from 'vue-router'
import Todos from '../views/Todos.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'todos',
        component: Todos
    },
    {
        path: '/edit/:id',
        name: 'edit.todo',
        props: true,
        component: () => import('../views/EditTodo.vue')
    },
    {
        path: '/create/todo',
        name: 'create.todo',
        component: () => import('../views/CreateTodo.vue')
    }
]

const router = new VueRouter({
    base: '/todos/',
    mode: 'history',
    routes
})

export default router
