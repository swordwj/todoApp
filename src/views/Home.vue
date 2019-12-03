<template>
    <div class="home">
        <app-head left="bars" title="TODO" right="search"></app-head>
        <background-color></background-color>
        <user-info></user-info>
        <todo-list></todo-list>
        <todo-detail></todo-detail>
        <todo-editing></todo-editing>
        <float-button></float-button>
    </div>
</template>

<script>
import appHead from './components/appHead.vue'
import backgroundColor from './components/background.vue'
import userInfo from './components/appUserInfo.vue'
import todoList from './components/todoList.vue'
import todoDetail from './components/todoDetail.vue'
import floatButton from './components/floatButton.vue'
import todoEditing from './components/todoEditing.vue'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['getAllTasksAct'])
  },
  components: {
    appHead,
    backgroundColor,
    userInfo,
    todoList,
    todoDetail,
    floatButton,
    todoEditing
  },
  created () {
    this.getAllTasksAct()
  }
}
</script>

<style>
.home {
  height: 100%;
  width: 100%;
  overflow: hidden;
  color: white;
}
</style>
