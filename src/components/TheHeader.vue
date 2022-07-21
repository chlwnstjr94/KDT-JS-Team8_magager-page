<template>
  <header class="header">
    <div class="head">
      <div class="head__inner">
        <RouterLink to="/">
          <div class="head-title">kakao<strong>emoticon</strong> studio</div>
        </RouterLink>
        <a href="https://luminous-mandazi-e5ba79.netlify.app/" class="go-store">메인 페이지로</a>
      </div>
    </div>
  </header>
</template>
<script>
import { mapStores } from 'pinia'
import { useUserStore } from '~/store/user'
export default {
  computed: {
    ...mapStores(useUserStore),
  }
}
</script>
<style lang="scss" scoped>
$head-height: 60px;
.header {
  width: 100%;
  height: $head-height;
  .head {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    min-width: 300px;
    background-color: #393A3E;
    .head__inner {
      height: $head-height;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .head-title {
        width: 258px;
        height: 42px;
        display: inline-block;
        background: url(https://emoticonstudio.kakao.com/assets/ico_studio_211202@2x-40be605c8caddc13e9f27e829c8534005dfc5fbc41e9cd5fb616c6b8b73f239b.png);
        background-size: 300px 450px;
        text-indent: -9999px;
        font-size: 25px;
        color: #fff;
        white-space: nowrap;
        strong {
          font-weight: 700;
        }
      }
      .go-store {
        color: #fff;
      }
    }
  }
}
</style>
