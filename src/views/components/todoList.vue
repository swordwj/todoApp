<template>
  <div class="todo-list" :class="{ 'todo-list__selected': !!selected }">
    <ul style="width: 300%">
      <li
      v-for="(todo, index) in todos"
      :key="index"
      :style="{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }">
        <todo
        :todo="todo"
        :selected="selected && todo === selected.todo"
        @select="selectTodoAct"></todo>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import todo from './todo.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    todo
  },
  computed: {
    ...mapState(['currentIndex', 'selected', 'todos'])
  },
  methods: {
    ...mapActions(['nextTodoPanel', 'prevTodoPanel', 'selectTodoAct'])
  },
  mounted () {
    let touch = {}
    this.$el.addEventListener('touchstart', evt => {
      touch.startX = evt.touches[0].clientX
      touch.endX = 0
    })
    this.$el.addEventListener('touchmove', evt => {
      touch.endX = evt.touches[0].clientX
    })
    this.$el.addEventListener('touchend', () => {
      if (!touch.endX || Math.abs(touch.endX - touch.startX) < 10) {
        return
      }
      if (touch.endX < touch.startX) {
        this.nextTodoPanel()
      } else {
        if (this.currentIndex > 0) {
          this.prevTodoPanel()
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.todo-list{
    height: 420px;
    padding: 0 30px;
    transition: all 0.5s ease;

    > ul,
    > ul > li {
        display: flex;
        height: 100%;
        transition: transform 0.5s ease;
    }

    > ul > li {
        flex: 1;
    }
}
.todo-list__selected {
  transform: scaleX(1.25);
}
</style>
