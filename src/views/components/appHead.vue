<template>
    <div class="app-head">
        <span class="app-head-left" @click="$emit('left')">
            <i :class="['fa', `fa-${left}`]"></i>
        </span>
        <span class="app-head-middle">{{ title }}</span>
        <span class="app-head-right" @click="$emit('right')">
            <i :class="['fa', `fa-${right}`]"></i>
        </span>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    left: {
      type: String,
      default: 'chevron-left'
    },
    right: {
      type: String,
      default: 'ellipsis-v'
    }
  }
}
</script>

<style lang="scss">
.app-head{
    height: 44px;
    display: flex;
    align-items: center;
    font-size: 16pX;
    z-index: 1;
}
.app-head-left{
    padding: 0 20px;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fa-bars:before {
    content: "\f0c9";
}
.app-head-middle{
    font-weight: 500;
    flex: 1;
    flex-grow: 1;
    text-align: center;
}
.app-head-right{
    padding: 0 20px;
}
.fa-search:before {
    content: "\f002";
}
</style>
