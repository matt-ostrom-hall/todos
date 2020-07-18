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
                @click="updateTodo"
            >
                Update
            </v-btn>
            <v-alert
                class="mt-4"
                type="success"
                v-show="successMessage"
            >
                Todo updated successfully!
            </v-alert>
            <div v-if="errors.length">There was a problem updating the todo</div>
        </v-card>
    </v-form>
</template>

<script>
    import axios from 'axios'
    import { mapMutations } from 'vuex'

    export default {
        props: ['todo'],
        data() {
            return {
                title: this.todo.title,
                completed: this.todo.completed,
                successMessage: false,
                errors: []
            }
        },
        methods: {
            ...mapMutations([
                'updateTodos'
            ]),
            updateTodo() {
                axios.patch(`https://jsonplaceholder.typicode.com/todos/${this.todo.id}`, {
                    title: this.title,
                    completed: this.completed,
                    userId: this.todo.userId
                })
                .then(response => {
                    this.updateTodos(response.data)
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
