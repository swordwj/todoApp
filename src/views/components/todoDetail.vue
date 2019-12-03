<template>
  <transition name="show-detail" @enter="handleEnter" @leave="handleLeave">
    <div class="todo-detail" v-if="selected">
      <app-head @left="unselectTodoAct"></app-head>
      <todo :todo="selected.todo"></todo>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import appHead from './appHead.vue'
import todo from './todo.vue'

export default {
  components: {
    appHead,
    todo
  },
  computed: {
    ...mapState(['selected', 'unselect'])
  },
  methods: {
    ...mapActions(['unselectTodoAct']),
    handleEnter (el) {
      Object.assign(el.style, {
        top: `${this.selected.transform.top}px`,
        left: `${this.selected.transform.left}px`,
        width: `${this.selected.transform.width}px`,
        height: `${this.selected.transform.height}px`
      })
      setTimeout(() => {
        Object.assign(el.style, {
          top: 0,
          left: 0,
          width: `${this.selected.transform.appWidth}px`,
          height: `${this.selected.transform.appHeight}px`
        })
      }, 0)
    },
    handleLeave (el) {
      Object.assign(el.style, {
        top: 0,
        left: 0,
        width: `${this.unselect.transform.appWidth}px`,
        height: `${this.unselect.transform.appHeight}px`
      })
      setTimeout(() => {
        Object.assign(el.style, {
          top: `${this.unselect.transform.top}px`,
          left: `${this.unselect.transform.left}px`,
          width: `${this.unselect.transform.width}px`,
          height: `${this.unselect.transform.height}px`
        })
      }, 0)
    }
  }
}
</script>

<style lang="scss">
.todo-detail{
  position: fixed;
  display: flex;
  flex-direction: column;
  border-radius: 0;
  background-color: white;
  color: #666;
  will-change: top, left, width, height;

  .app-head {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  .todo{
    margin: 0;
    margin-top: -44px;
    padding: 0 20px;
    box-shadow: none;
  }
  .todo_head,
  .todo_body {
    transform: translate3d(0, 88px, 0);
  }
  .todo_menu {
    opacity: 0;
  }
  .todo_tasks {
    opacity: 1;
    transform: scaleY(1);
  }
}
.show-detail-enter,
.show-detail-leave-to{
  border-radius: 8px;
  .app-head{
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  .todo {
    padding: 0;
  }
  .todo_head {
    transform: translate3d(0, 0, 0);
  }
  .todo_body {
    transform: translate3d(0, 189px, 0);
  }
  .todo_menu {
    opacity: 1;
  }
  .todo_tasks {
    opacity: 0;
    transform: scale3d(1, 0, 1);
  }
}
.show-detail-enter-to,
.show-detail-leave{
  border-radius: 0;
  .app-head {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  .todo {
    padding: 0 20px;
  }
  .todo_head,
  .todo_body {
    transform: translate3d(0, 88px, 0);
  }
  .todo_menu {
    opacity: 0;
  }
  .todo_tasks {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}
.show-detail-enter-active,
.show-detail-leave-active {
  transition: all 0.5s ease;

  .todo,
  .todo_head,
  .todo_body,
  .todo_menu,
  .todo_tasks,
  .app-head {
    transition: all 0.5s ease;
  }
}
</style>
