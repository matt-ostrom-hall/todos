<template>
    <div class="home">
        <v-card
            class="mx-auto pa-4 mb-2"
            max-width="600"
        >
            <filter-input></filter-input>
        </v-card>
        <v-card
            class="mx-auto text-center"
            max-width="600"
        >
            <todo-list-item
                v-for="todo in todos"
                :key="todo.id"
                :todo="todo"
            ></todo-list-item>
        </v-card>
    </div>
</template>

<script>
    import TodoListItem from '../components/TodoListItem';
    import FilterInput from '../components/FilterInput';
    import { mapState } from 'vuex';

    export default {
        components: {
            TodoListItem,
            FilterInput
        },
        computed: {
            ...mapState([
                'todos'
            ])
        },
        created() {
            this.$store.dispatch('requestTodos')
        }
    }
</script>
