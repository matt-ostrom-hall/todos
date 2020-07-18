<template>
    <v-app>
        <v-main>
            <div id="nav" class="pa-6 text-center">
                <router-link :to="{ name: 'todos'}">All Todos</router-link> |
                <router-link :to="{ name: 'create.todo' }">Create Todo</router-link>
            </div>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<style>
    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }
    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
