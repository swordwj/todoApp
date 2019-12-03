<template>
  <transition name="edit-show">
    <div class="todo-edit" v-if="editing">
      <app-head title="New Tasks" left="close" @left="addTaskAct"></app-head>
      <div class="todo-edit_head">
        <p>What tasks are you planning to do?</p>
      </div>
      <div class="todo-edit_body">
        <textarea autofocus rows="3" v-model="editing.text"></textarea>
        <p class="todo-edit_info">
          <i :class="['fa', `fa-${selected.todo.icon}`]"></i>
          {{ selected.todo.name }}</p>
        <p class="todo-edit_info">
          <i :class="['fa', 'fa-calendar']"></i>
          Today</p>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import appHead from './appHead.vue'

export default {
  computed: {
    ...mapState(['selected', 'editing'])
  },
  components: {
    appHead
  },
  methods: {
    ...mapActions(['addTaskAct'])
  }
}
</script>

<style lang="scss">
.todo-edit {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0;
  background-color: white;
  color: #666;
  will-change: transform;
}
.todo-edit_head {
  padding: 40px 40px 0;
  color: #999;

  p {
    font-size: 26px;
  }
}
.todo-edit_body {
  padding: 0 40px;
}
.todo-edit_body textarea {
    margin: 20px 0;
    border: none;
    outline: none;
    width: 100%;
    resize: none;
    color: #666;
    font-size: 32px;
    line-height: 1.2em;
}
.todo-edit_info {
  display: flex;
  height: 44px;
  align-items: center;
  border-bottom: 1px solid #eee;
  color: #999;
  font-size: 20px;

  i {
    width: 15px;
    padding-right: 14px;
  }
}
.edit-show-enter,
.edit-show-leave-to {
  transform: translateY(100%);
}
.edit-show-enter-to,
.edit-show-leave {
  transform: translateY(0);
}
.edit-show-enter-active,
.edit-show-leave-active {
  transition: all 0.5s ease;
}
</style>
