<template>
  <div>
    {{ this.$store.state.num.num }}
    <ul>
      <li v-for="(item, index) in this.$store.state.todos.todoa" :key="index">
        {{ item.con }}
      </li>
    </ul>
    <p>{{ test }}</p>
    <!-- <p>{{ num }}</p> -->
    <p>全局的属性：{{ classId }},{{ numa }}</p>
    <p>num子模块的属性：{{ aa }}</p>
    <p>tosos子模块的属性：{{ num }}</p>
  </div>
</template>
<script>
// 这是基于全局展开的
import { mapState } from 'vuex'
// 基于num.js 创建一个空间
import { createNamespacedHelpers } from 'vuex'
// 创建子模块 基于store的子模块
const num_store = createNamespacedHelpers('num')
const todo_store = createNamespacedHelpers('todos')
// mapState('modulePath', ${[]|{}})
export default {
  computed: {
    test() {
      return 'xxx'
    },
    // 如果多个子模块中定义了多个重名属性，下面会覆盖上面，解决办法，重命名
    ...mapState(['classId', 'numa']),
    // ...num.mapState(['num'])
    // 还可以重命名
    ...num_store.mapState({
      aa: 'num',
    }),
    ...todo_store.mapState(['num']),
  },
}
</script>
<style scoped></style>
