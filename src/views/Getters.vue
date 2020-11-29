<template>
  <div class="getters">
    <!-- <h1>衍生属性的原生使用方式</h1>
    <p>todos的数量{{ getTodosCount }}</p>
    <p>todos的数量{{ TodosCount }}</p> -->
    <!-- <p>todos的数量{{ this.$store.getters.todos.TodosCount }}</p> -->
    <!-- <h2>使用mapGetters语法糖</h2> -->
    <!-- <p>todos的数量{{ TodosCount }}</p> -->
    <!-- <p>完成的todos数量：{{ CompletedTodosCount }}</p> -->
    <!-- <p>根据id获取数据：{{ getTodoById(1) }}</p> -->
    <!-- <p>根据id获取数据：{{ getTodoById(2) }}</p> -->
    <!-- <p>获取num:{{ getNum }}</p> -->
    <h1>使用... mapGetters 语法糖方式</h1>
    <p>todos的数量{{ TodosCount }}</p>
    <p>根据id获取数据：{{ getTodoById(2) }}</p>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex'
import { createNamespacedHelpers } from 'vuex'
// const num_store = createNamespacedHelpers('num')
const todo_store = createNamespacedHelpers('todos')
export default {
  //   methods: {
  //     getTodoById(id) {
  //       // 注意是小撇
  //       return `${id}的数据`
  //     },
  //   },
  computed: {
    //   简化直接写在语法糖里面
    // getTodoById() {
    //   return this.$store.getters.getTodoById
    // },
    // getTodosCount() {
    //   return this.$store.getters.TodosCount
    // },
    ...todo_store.mapGetters(['TodosCount', 'getTodoById']),

    // ...mapGetters([
    //   'TodosCount',
    //   'CompletedTodosCount',
    //   'getNum',
    //   'getTodoById',
    // ]),
  },
}
</script>
