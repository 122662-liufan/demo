<template>
  <div class="mutations">
    <p>同步修改数据,原始写法</p>
    <button @click="incrementNum">加一</button>
    <p>同步修改数据 mapMutations</p>
    <button @click="decrementNum">减一</button>
    <p>num:{{ num }}</p>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['num']),
  },
  methods: {
    //   简化代码操作，同下加加操作
    ...mapMutations(['decrementNum']),
    incrementNum() {
      //修改store中的 num + 1
      this.$store.commit('incrementNum')
    },
    // decrementNum() {
    //   this.$store.commit('decrementNum')
    // },
  },
}
</script>
