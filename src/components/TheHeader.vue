<template>
  <header>
    <!-- header -->
    <div class="head" @click="this.userStore.authUser">
      <div class="head__inner">
        <RouterLink to="/">
          <div class="head-title">kakao<strong>emoticon</strong> studio</div>
        </RouterLink>
        <a href="#" class="go-store">메인 페이지로</a>
      </div>
    </div>
  </header>
</template>
<script>
import { mapStores } from 'pinia'
import { useUserStore } from '~/store/user'
export default {
  data() {
    return {
      current: false,
      searchOn: false,
      leftNavOn: false,
      popupOn: false,
      searchValue: '',
      // email: '',
      // displayName: '로그인 해주세요',
      // img: '',
      // header에 프로필 화면 보여주는 변수
      // img: this.userStore.img || 'profile_default.png',
      // user: this.userStore.user || '',
    }
  },
  created() {
    //this.userStore.authUser()
  },
  computed: {
    ...mapStores(useUserStore),
  },
  methods: {
    isMatch(path) {
      if (!path) return false
      return path.test(this.$route.fullPath)
    },
  },
  watch: {},
}
</script>
<style lang="scss" scoped>
$head-height: 60px;
header {
  width: 100vw;
  height: $head-height;
}
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
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .head-title {
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
</style>
