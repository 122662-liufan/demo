<template>
  <div>
    {{ this.$store.state.num }}
    <ul>
      <li v-for="(item, index) in this.$store.state.todo" :key="index">
        {{ item }}
      </li>
    </ul>
    <p>{{ test }}</p>
    <!-- <p>{{ num }}</p> -->
    <p>{{ aa }}</p>
  </div>
</template>
<script>
import { mapState } from 'vuex'
// mapState('modulePath', ${[]|{}})
export default {
  computed: {
    test() {
      return 'xxx'
    },
    // ...mapState(['num']),
    // 还可以重命名
    ...mapState({
      aa: 'num',
    }),
  },
}
</script>
<style scoped></style>
