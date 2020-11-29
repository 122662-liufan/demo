import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import num from './modules/num'
import todos from './modules/todos'

export default new Vuex.Store({
    // 原始数据，从服务器直接返回的数据
    state: {  //全局属性 在项目中用户登录的信息
        // 注意名字和属性不能相同
        classId: 'h5',
        numa: 1000
        // num: 10,
        // todo: [1, 2, 3, 4, 5, 6],
        // todoa: [
        //     { id: 1, completed: false, con: 'lisa' },
        //     { id: 2, completed: true, con: 'lizhi' },
        //     { id: 3, completed: true, con: 'donglin' },
        //     { id: 4, completed: true, con: 'lijie' },
        //     { id: 5, completed: false, con: 'shazi' }
        // ],
    },
    // 衍生数据 在原始数据的基础上经过一定的业务逻辑产生新的数据
    getters: {//原始数据 从服务器直接返回的数据
        todos: () => {
            return {
                TodosCount: "xxx"
            }
        }
        // TodosCount (state) {
        //     return state.todo.length
        // },
        // TodosCount: state => state.todo.length,
        // 完成的todos的数量
        // CompletedTodosCount (state) {
        //     // 过滤属性
        //     return state.todoa.filter((item) => {
        //         return item.completed ? true : false
        //     }).length
        // }

        // CompletedTodosCount: state => {
        //     return state.todoa.filter(item => item.completed).length
        // },

        // CompletedTodosCount: state => state.todoa.filter(item => item.completed).length,
        // 根据id 获取todos的ID
        // getTodoById: state => id => state.todoa.filter(item => item.id == id),
        // getTodoById (state) {
        //     return function (id) {
        //         return state.todo.filter(item => item.id == id)
        //     }
        // }
        // getNum: state => state.num + 1,
    },
    mutations: {
        // // 定义修改的方式
        // incrementNum (state) {
        //     state.num = state.num + 1
        // },
        // decrementNum (state) {
        //     state.num = state.num - 1
        // },
        // initTodos: (state, todo) => {
        //     state.todoa = todo
        // }
    },
    actions: {
        // getTodos ({ commit }) {
        //     // 异步请求 API 根据请求的method决定业务
        //     axios.get('http://jsonplaceholder.typicode.com/todos').then(res => {
        //         // console.log(res.data)
        //         const todo = res.data.splice(0, 10)
        //         //调用 mutations更改数据
        //         // this.$store.commit('ininTodos', todo)
        //         commit('initTodos', todo)
        //     }).catch(err => {
        //         console.log('err')
        //     })
        // }

    },
    modules: {
        // 可以使用别名，
        // 比如 num：aa
        num,
        todos
    }

})