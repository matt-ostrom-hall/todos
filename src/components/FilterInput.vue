<template>
    <v-text-field
        label="Filter By Title"
        v-model="filter"
        @keyup="filterTodos"
        @keyup.backspace="checkFilter"
    >
    </v-text-field>
</template>

<script>
    import axios from 'axios'
    import { mapMutations, mapActions } from 'vuex'

    export default {
        data() {
            return {
                filter: ''
            }
        },
        methods: {
            ...mapMutations([
                'setTodos'
            ]),
            ...mapActions([
                'requestTodos'
            ]),
            filterTodos() {
                axios.get(`https://jsonplaceholder.typicode.com/todos?title=${this.filter}`)
                .then(response => {
                    this.setTodos(response.data)
                })
            },
            checkFilter() {
                if( this.filter.length === 0 ) this.requestTodos()
            }
        }
    }
</script>
