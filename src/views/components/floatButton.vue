<template>
  <transition name="float-btn">
    <button
    class="float-button"
    v-if="!!selected"
    :class="{ 'float-button__editing': !!editing }"
    :style="{ background: gradientColor }"
    @click="addTaskAct(editing)"
    >
    </button>
  </transition>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['selected', 'editing']),
    ...mapGetters(['currentTodo']),
    gradientColor () {
      const colorLeft = `color-stop(30%, ${this.currentTodo.colors[0]})`
      const colorRight = `to(${this.currentTodo.colors[1]})`
      return `-webkit-gradient(linear, left bottom, right top, ${colorLeft}, ${colorRight})`
    }
  },
  methods: {
    ...mapActions(['addTaskAct'])
  }
}
</script>

<style lang="scss">
.float-button {
  position: fixed;
  right: 44px;
  bottom: 64px;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  border-radius: 44px;
  width: 44pX;
  height: 44pX;
  color: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
}
.float-button::before,
.float-button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 20pX;
  height: 2pX;
  background-color: white;
  transform: translate(-50%, -50%);
}
.float-button::after {
  transform: translate(-50%, -50%) rotate(90deg);
}
.float-btn-leave-to,
.float-btn-enter {
  transform: scale(0);
}
.float-btn-enter-to,
.float-btn-leave {
  transform: scale(1);
}
.float-btn-enter-active {
  transition: all 0.2s 0.3s ease;
}
.float-btn-leave-active {
  transition: all 0.3s ease;
}
.float-button__editing {
  right: 0;
  bottom: 0;
  width: 100%;
  border-radius: 0;
}
</style>
