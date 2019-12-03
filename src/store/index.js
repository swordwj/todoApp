import Vue from 'vue'
import Vuex from 'vuex'
import { getOneTypeTasks, addTask, deleteTask, updateTask } from '../tools/tasks'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentIndex: 0,
    datee: new Date(),
    todos: [
      {
        icon: 'user',
        name: 'Personal',
        tasks: [
          {
            id: 100000000000000000001,
            title: 'Dating',
            date: new Date(),
            done: true,
            deleted: false
          },
          {
            id: 100000000000000000002,
            title: 'Meeting',
            date: new Date(),
            done: false,
            deleted: false
          }
        ],
        colors: ['#ff6262', '#ffa947']
      },
      {
        icon: 'suitcase',
        name: 'Work',
        tasks: [
          {
            id: 100000000000000000003,
            title: 'Codding',
            date: new Date(),
            done: false,
            deleted: false
          }
        ],
        colors: ['#5b9df9', '#47bfff']
      },
      {
        icon: 'home',
        name: 'Home',
        tasks: [
          {
            id: 100000000000000000004,
            title: 'House Keeping',
            date: new Date(),
            done: true,
            deleted: false
          }
        ],
        colors: ['#2c7d59', '#3ba776']
      }
    ],
    selected: null,
    unselected: null,
    editing: null
  },
  getters: {
    currentTodo (state) {
      return state.todos[state.currentIndex]
    }
  },
  mutations: {
    selectTodo (state, data) {
      state.unselect = null
      state.selected = data
    },
    unselectTodo (state, data) {
      state.unselect = state.selected
      state.selected = null
    },
    nextTodo (state) {
      if (state.currentIndex < state.todos.length - 1) {
        state.currentIndex++
      }
    },
    prevTodo (state) {
      if (state.currentIndex > 0) {
        state.currentIndex--
      }
    },
    deleteTask (_, { task }) {
      task.deleted = true
      deleteTask(task)
    },
    addTask (state) {
      if (state.editing && state.editing.text) {
        state.selected.todo.tasks.unshift(addTask(state))
      }
      state.editing = state.editing ? null : { text: '' }
    },
    getAllTasks (state) {
      for (let item in state.todos) {
        state.todos[item].tasks = getOneTypeTasks(state.todos[item].name, state.todos[item].tasks)
      }
    },
    updateTask (state, data) {
      updateTask(data)
    }
  },
  actions: {
    selectTodoAct ({ commit }, data) {
      commit('selectTodo', data)
    },
    unselectTodoAct ({ commit }, data) {
      commit('unselectTodo', data)
    },
    nextTodoPanel ({ commit }) {
      commit('nextTodo')
    },
    prevTodoPanel ({ commit }) {
      commit('prevTodo')
    },
    deleteTaskAct ({ commit }, { task }) {
      commit('deleteTask', { task })
    },
    addTaskAct ({ commit }) {
      commit('addTask')
    },
    getAllTasksAct ({ commit }) {
      commit('getAllTasks')
    },
    updateTaskAct ({ commit }, data) {
      commit('updateTask', data)
    }
  },
  modules: {
  }
})
