import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: []
    },
    mutations: {
        setTodos( state, todos ) {
            state.todos = todos
        },
        updateTodos( state, todo ) {
            const index = state.todos.findIndex(item => item.id === todo.id);
            state.todos[index] = todo;
        },
        addTodo( state, todo ) {
            state.todos.push(todo)
        },
        deleteTodo( state, todo )  {
            const index = state.todos.findIndex(item => item.id === todo.id)
            state.todos.splice(index, 1)
        }
    },
    actions: {
        requestTodos({ state, commit }) {
            if (state.todos.length === 0) {
                axios.get('https://jsonplaceholder.typicode.com/todos')
                    .then(response => {
                        commit('setTodos', response.data)
                    })
            }
        }
    }
})
