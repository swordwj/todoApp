<template>
    <div
      class="bg-color"
      :class="{ bg_color__activity: activity }"
      :style="{backgroundImage: gradientColor}">
    </div>
</template>
<script>
export default {
  props: ['activity', 'colors'],
  computed: {
    gradientColor () {
      const colorBottom = `color-stop(30%, ${this.colors[0]})`
      const colorTop = `to(${this.colors[1]})`
      return `-webkit-gradient(linear, left bottom, left top, ${colorBottom}, ${colorTop})`
    }
  }
}
</script>

<style>
.bg-color{
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.bg_color__activity{
  opacity: 1;
}
</style>
