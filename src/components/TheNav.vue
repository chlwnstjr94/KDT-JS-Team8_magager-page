<template>
    <nav>
      <div class="leftnav__inner">
        <RouterLink v-if="!userStore.user" to="/login" class="nav-profile">
          <div class="profile-big">
            <img src="profile_default.png" alt="profile-default" />
          </div>
          <div class="profile-name">로그인</div>
        </RouterLink>
        <RouterLink v-else to="/mypage" class="nav-profile">
          <div class="profile-big">
            <img src="profile_default.png" alt="profile-default" />
          </div>
          <div class="profile-name">{{ this.userStore.user.displayName }}</div>
        </RouterLink>
        <ul class="list-nav">
          <li>
            <RouterLink to="/allproduct">제품 관리</RouterLink>
          </li>
          <li>
            <RouterLink to="/addproduct">제품 추가</RouterLink>
          </li>
          <li>
            <RouterLink to="/transactionsall">거래 내역</RouterLink>
          </li>
        </ul>
        <ul class="list-aside">
          <li v-if="userStore.user" @click="userStore.logoutUser">
            <RouterLink to="/">로그아웃</RouterLink>
          </li>
          <li v-if="userStore.user">
            <RouterLink to="/user">정보 수정</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
import { mapStores } from 'pinia'
import { useUserStore } from '~/store/user'
export default {
  created() {
    //this.userStore.authUser()
  },
  computed: {
    ...mapStores(useUserStore),
  },
  watch: {},
}
</script>

<style lang="scss" scoped>
nav {
  width: 230px;
}
</style>