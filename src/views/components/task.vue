<template>
  <transition name="show-task">
    <div class="task" v-if="!task.deleted">
      <input :id="id" type="checkbox" v-model="task.done" @click="updateTaskAct(task)"/>
      <label :for="id">{{ task.title }}</label>
      <transition name="task-trash">
        <span
          class="task_delete"
          v-show="task.done"
          @click="deleteTaskAct({ task })">
          <i class="fa fa-trash"></i>
        </span>
      </transition>
    </div>
  </transition>
</template>

<script>
import { mapActions } from 'vuex'

let initId = 0
export default {
  data () {
    return {
      id: `task-${initId++}`
    }
  },
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['deleteTaskAct', 'updateTaskAct'])
  }
}
</script>

<style lang="scss">
.task {
  display: flex;
  padding: 10pX 0;
  border-bottom: 1pX solid #eee;
  font-size: 15pX;
}
.task input {
  display: none;
}
.task label {
  flex: 1;
  line-height: 20pX;
}
.task label:before,
.task label:after {
  content: '';
  display: inline-block;
  margin-right: 12pX;
  margin-top: 1pX;
  width: 14pX;
  height: 13pX;
  vertical-align: top;
}
.task label:before {
  border: 1px solid #ccc;
  border-radius: 2pX;
  background-color: white;
}
.task label:after {
  content: '\f00c';
  position: relative;
  display: none;
  z-index: 10;
  margin-right: -16pX;
  width: 11pX;
  height: 10pX;
  padding: 3px;
  border-radius: 2pX;
  font: normal normal normal 10pX/1 FontAwesome;
  color: white;
  background-color: #ccc;
  float: left;
}
.task input:checked + label:after {
  display: inline-block;
}
.task_delete {
  color: #bbb;
  font-size: 16pX;
  padding: 0 10pX;
}
.task-trash-leave-to,
.task-trash-enter {
  opacity: 0;
}
.task-trash-enter-to,
.task-trash-leave {
  opacity: 1;
}
.task-trash-enter-active,
.task-trash-leave-active {
  transition: all 0.3s ease;
}
</style>
