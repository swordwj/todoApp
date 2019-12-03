<template>
    <div class="bg">
        <bg-color
        v-for="(todo, index) in todos"
        :key="index"
        :activity="index <= currentIndex"
        :colors="todo.colors"></bg-color>
    </div>
</template>

<script>
import bgColor from './bgColor.vue'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      activity: true,
      colors: ['#ff6262', '#ffa947']
    }
  },
  components: {
    bgColor
  },
  computed: {
    ...mapState(['todos', 'currentIndex'])
  }
}
</script>

<style>
.bg{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}
</style>
