<template>
  <div class="todo" @click="handleClick" :class="{ 'todo__selected': selected }">
    <div class="todo_head">
      <div class="todo_icon" :style="{ color }">
        <i :class="['fa', `fa-${todo.icon}`]"></i>
      </div>
      <div class="todo_menu">
        <i class="fa fa-ellipsis-v"></i>
      </div>
    </div>
    <div class="todo_body">
      <p class="todo_tips">{{ totalTodoTasks.length }} Tasks to do</p>
      <p class="todo_title">{{ this.todo.name }}</p>
      <div class="todo_progress">
        <span class="todo_progress_line">
          <i :style="{ width: progress, backgroundImage: progressColor }"></i>
        </span>
        <span class="todo_progress_num">{{ progress }}</span>
      </div>
      <div class="todo_tasks">
        <p class="todo_subTitle">Today</p>
        <ul>
          <li v-for="(task, index) in todayTasks"
          :key="index">
            <task :task="task"></task>
          </li>
        </ul>
      </div>
      <div class="todo_tasks">
        <p class="todo_subTitle">Outdated</p>
        <ul>
          <li v-for="(task, index) in outdatedTasks"
          :key="index">
            <task :task="task"></task>
          </li>
        </ul>
      </div>
      <div class="todo_tasks">
        <p class="todo_subTitle">Deleted</p>
        <ul>
          <li v-for="(task, index) in deletedTasks"
          :key="index">
            <task :task="task" :showDelete="true"></task>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import task from './task.vue'
import { today, tomorrow, yestoday } from '../../tools/time'

export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean
    }
  },
  components: {
    task
  },
  computed: {
    color () {
      return this.todo.colors[0]
    },
    progress () {
      const totalCount = this.todo.tasks.filter(t => !t.deleted).length
      const doneCount = this.todo.tasks.filter(t => !t.deleted && t.done).length
      if (totalCount === 0) {
        return '0%'
      } else {
        return `${Math.round((doneCount / totalCount) * 100)}%`
      }
    },
    progressColor () {
      const colorLeft = `color-stop(30%, ${this.todo.colors[0]})`
      const colorRight = `to(${this.todo.colors[1]})`
      return `-webkit-gradient(linear, left bottom, right bottom, ${colorLeft}, ${colorRight})`
    },
    totalTodoTasks () {
      return this.todo.tasks.filter(task => {
        return !task.done && !task.deleted
      })
    },
    todayTasks () {
      return this.todo.tasks.filter(task => {
        return task.date >= today && task.date < tomorrow && !task.deleted
      })
    },
    outdatedTasks () {
      return this.todo.tasks.filter(task => {
        return task.date < today && !task.deleted
      })
    },
    deletedTasks () {
      return this.todo.tasks.filter(task => {
        return task.deleted
      })
    }
  },
  methods: {
    handleClick () {
      const appAttr = document.querySelector('#app').getBoundingClientRect()
      const elAttr = this.$el.getBoundingClientRect()
      const todo = this.todo
      const transform = {}
      transform.top = elAttr.top - appAttr.top
      transform.left = elAttr.left - appAttr.left
      transform.width = elAttr.width
      transform.height = elAttr.height
      transform.appWidth = appAttr.width
      transform.appHeight = appAttr.height
      this.$emit('select', { transform, todo })
    }
  }
}
</script>

<style lang="scss">
.todo{
  color: #666;
  flex: 1;
  margin: 0 8px;
  border-radius: 8px;
  background-color: white;
  overflow: hidden;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
}
.todo__selected{
  visibility: hidden;
}
.todo_head{
  display: flex;
  padding: 20px;
  height: 44px;
  justify-content: space-between;
  align-items: flex-start;
  transform: translate3d(0, 0, 0);
  will-change: transform;
}
.todo_icon{
  display: flex;
  width: 44px;
  height: 44px;
  border: 1px solid #eee;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}
.todo_menu{
  color: #dddddd;
}
.todo_body{
  padding: 0 20px;
  transform: translate3d(0, 189px, 0);
  will-change: transform;
}
.todo_tips{
  opacity: 0.6;
  font-size: 13px;
  font-weight: 600
}
.todo_title{
  margin-top: 6px;
  font-size: 32px;
}
.todo_progress{
  display: flex;
  align-items: center;
  margin-top: 30px;
}
.todo_progress_line{
  flex: 1;
  height: 3px;
  background-color: #ddd;
  margin-right: 10px;

  i {
    display: block;
    height: 100%;
    transition: all 0.3s ease;
  }
}
.todo_progress_num{
  font-size: 12px;
}
.todo_tasks{
  opacity: 0;

  > ul {
    list-style: none;
  }
}
.todo_subTitle {
    margin-top: 32px;
    margin-bottom: 8px;
    color: #999;
    font-size: 14px;

    > ul,
    > ul > li {
      transition: all 0.5s ease;
    }
}
</style>
