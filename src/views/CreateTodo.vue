<template>
    <v-form>
        <v-card
            class="mx-auto pa-6"
            max-width="600"
        >
            <v-text-field
                label="Title"
                v-model="title"
            >
            </v-text-field>
            <v-checkbox
                label="Completed"
                v-model="completed"
            ></v-checkbox>
            <v-btn
                class="mt-2"
                color="primary"
                @click="createTodo"
                v-show="titleIsSet"
            >
                Create
            </v-btn>
            <v-alert
                class="mt-4"
                type="success"
                v-show="successMessage"
            >
                Todo created successfully!
            </v-alert>
            <div v-if="errors.length">There was a problem updating the todo</div>
        </v-card>
    </v-form>
</template>

<script>
    import { mapMutations } from 'vuex'
    import axios from 'axios'

    export default {
        data() {
            return {
                title: '',
                completed: false,
                successMessage: false,
                errors: []
            }
        },
        computed: {
            titleIsSet() {
                return this.title.length > 0
            }
        },
        methods: {
            ...mapMutations([
                'addTodo'
            ]),
            createTodo() {
                axios.post('https://jsonplaceholder.typicode.com/todos', {
                    title: this.title,
                    completed: this.completed
                })
                    .then(response => {
                        this.addTodo(response.data)
                        this.successMessage = true
                        setTimeout(() => {
                            this.successMessage = false
                        }, 4000);
                    })
                    .catch(errors => {
                        this.errors = errors.data
                    })
            }
        }
    }
</script>
