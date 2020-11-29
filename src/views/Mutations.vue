<template>
  <div class="mutations">
    <!-- <p>同步修改数据,原始写法</p>
    <button @click="incrementNum">加一</button>
    <p>同步修改数据 mapMutations</p>
    <button @click="decrementNum">减一</button>-->
    <h1>使用... Mutations 语法糖方式</h1>
    <button @click="incrementNum">加一</button>
    <button @click="decrementNum">减一</button>
    <p>num:{{ num }}</p>
  </div>
</template>
<script>
// import { mapMutations, mapState } from 'vuex'
// 基于num.js 创建一个空间
import { createNamespacedHelpers } from 'vuex'
// 创建子模块 基于store的子模块
const num_store = createNamespacedHelpers('num')
export default {
  computed: {
    ...num_store.mapState(['num']),
  },
  methods: {
    // //   简化代码操作，同下加加操作
    // ...mapMutations(['decrementNum']),
    // incrementNum() {
    //   //修改store中的 num + 1
    //   this.$store.commit('incrementNum')
    // },
    // decrementNum() {
    //   this.$store.commit('decrementNum')
    // },
    ...num_store.mapMutations(['incrementNum', 'decrementNum']),
  },
}
</script>
