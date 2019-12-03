<template>
  <div class="app-userinfo" :class="{ app_userinfo__selected: !!selected }">
    <div class="app-userinfo_face">
      <img src="../../../public/headIcon.jpeg">
    </div>
    <p class="app-userinfo_name">Hello! My friend.</p>
    <p class="app-userinfo_tips">
      Looks like feed good.<br />You have some tasks to do
      today.</p>
      <p class="app-userinfo_date">TODAY : {{ today | dateString }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      today: new Date()
    }
  },
  filters: {
    dateString (time) {
      return time
        .toDateString()
        .toUpperCase()
        .replace(/(\s\d{4})$/, ', $1')
    }
  },
  computed: {
    ...mapState(['selected'])
  }
}
</script>

<style lang="scss" scoped>
  .app-userinfo {
    padding: 0 36px;
    display: flex;
    height: 280px;
    flex-direction: column;
    justify-content: flex-end;
    transition: all 0.5s ease;
  }
  .app_userinfo__selected {
    transform: translate3d(0, 20px, 0);
    opacity: 0;
  }
  .app-userinfo_face{
    height: 66px;
    width: 66px;

    > img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    }
  }
  .app-userinfo_name{
    margin-top: 30px;
    padding: 0 6px;
    font-size: 32px;
    letter-spacing: 1px;
    font-weight: 400;
  }
  .app-userinfo_tips{
    margin-top: 16px;
    padding: 0 6px;
    font-size: 15px;
    font-weight: 330;
    opacity: 0.8;
    line-height: 20px;
  }
  .app-userinfo_date{
    margin-top: 32px;
    margin-bottom: 16px;
    padding: 0 6px;
    font-size: 15px;
    font-weight: 400;
  }
</style>
