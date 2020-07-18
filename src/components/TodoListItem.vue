<template>
    <v-list-item three-line>
        <v-list-item-content>
            <v-list-item-title>{{ todo.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ status(todo) }}</v-list-item-subtitle>
            <v-list-item-subtitle class="py-2">
                <router-link :to="{ name: 'edit.todo', params: { id: todo.id, todo: todo }}">
                    <v-btn
                        class="mr-1"
                        small
                        color="primary"
                    >
                        Edit
                    </v-btn>
                </router-link>

                <v-btn
                    class="ml-1"
                    small
                    color="#E12D39"
                    @click="removeTodo(todo)"
                >
                    Delete
                </v-btn>
            </v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
    import { mapMutations } from 'vuex'
    import axios from "axios";

    export default {
        props: ['todo'],
        methods: {
            ...mapMutations([
                'deleteTodo'
            ]),
            status(todo) {
                return todo.completed ? 'Complete' : 'Incomplete'
            },
            removeTodo(todo) {
                axios.delete(`https://jsonplaceholder.typicode.com/todos/${todo.id}`)
                    .then(response => {
                        if(response.status === 200) {
                            this.deleteTodo(todo)
                        }
                    })
            }
        }
    }
</script>
