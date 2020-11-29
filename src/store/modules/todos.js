import axios from 'axios'
const state = {
    todo: [1, 2, 3, 4, 5, 6],
    todoa: [
        { id: 1, completed: false, con: 'lisa' },
        { id: 2, completed: true, con: 'lizhi' },
        { id: 3, completed: true, con: 'donglin' },
        { id: 4, completed: true, con: 'lijie' },
        { id: 5, completed: false, con: 'shazi' }
    ],
    num: 20
}
const getters = {
    TodosCount: state => state.todo.length,
    CompletedTodosCount: state => state.todoa.filter(item => item.completed).length,
    getTodoById: state => id => state.todoa.filter(item => item.id == id),
}

const mutations = {
    initTodos: (state, todo) => {
        state.todoa = todo
    }
}

const actions = {
    getTodos ({ commit }) {
        // 异步请求 API 根据请求的method决定业务
        axios.get('http://jsonplaceholder.typicode.com/todos').then(res => {
            // console.log(res.data)
            const todo = res.data.splice(0, 10)
            //调用 mutations更改数据
            // this.$store.commit('ininTodos', todo)
            commit('initTodos', todo)
        }).catch(err => {
            console.log('err')
        })
    }

}

export default {
    namespaced: true,     //给每一个子模块定义为单独的空间
    state,
    getters,
    mutations,
    actions
}