<template>
  <div class="actions">
    <p>异步获取服务器</p>
    <!-- <button @click="loadTodos">加载数据</button> -->
    <button @click="getTodos">加载数据</button>
    <ul>
      <li v-for="item in todoa" :key="item.id">
        {{ item.title ? item.title : item.con }}
      </li>
    </ul>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const todo_store = createNamespacedHelpers('todos')
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    // ...mapState(['todoa']),
    ...todo_store.mapState(['todoa']),
  },
  methods: {
    //简化代码 同下面方法
    //  ...mapActions(['getTodos']),
    // 子模块用法
    ...todo_store.mapActions(['getTodos']),
    // loadTodos() {
    //   // 调用 getTodos
    //   this.$store.dispatch('getTodos')
    // },
  },
}
</script>
