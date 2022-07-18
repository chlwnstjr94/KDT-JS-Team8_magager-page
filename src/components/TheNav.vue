<template>
  <nav>
    <div class="nav_inner">
      <section class="user-info">
        <RouterLink v-if="!userStore.user" to="/login" class="nav-profile">
          <div class="profile-big">
            <img class="profile-img" src="profile_default.png" alt="profile-default" />
          </div>
          <div class="profile-name">로그인</div>
        </RouterLink>
        <RouterLink v-else to="/mypage" class="nav-profile">
          <div class="profile-big">
            <img class="profile-img" src="profile_default.png" alt="profile-default" />
          </div>
          <div class="profile-name">{{ this.userStore.user.displayName }}</div>
        </RouterLink>
        <button v-if="userStore.user" @click="userStore.logoutUser" class="logout-btn">
          <RouterLink to="/" class="logout-link">로그아웃</RouterLink>
        </button>
      </section>
      <ul class="nav-list">
        <li>
          <RouterLink to="/addproduct" class="list-link">
            <ion-icon name="bulb-outline"></ion-icon>
            제품 추가
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/allproduct" class="list-link">
            <ion-icon name="construct-outline"></ion-icon>
            제품 관리
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/transactionsall" class="list-link">
            <ion-icon name="document-text-outline"></ion-icon>
            거래 내역
          </RouterLink>
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
    this.userStore.authUser()
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
  .nav_inner {
    border: 1px solid #e6e6e6;
    background: #fff;
    font-size: 13px;
    color: #2d2e32;
    .user-info {
      padding: 30px 20px 42px;
      text-align: center;
      .profile-img {
        width: 98px;
        height: 98px;
        margin: 0 auto 16px;
        border-radius: 50%;
      }
      .profile-name {
        display: block;
        margin-bottom: 12px;
        font-weight: bold;
        color: #2d2e32;
      }
      .logout-btn {
        height: 23px;
        padding: 0 7px;
        border: 1px solid #c4c4c4;
        border-radius: 2px;
        font-size: 12px;
        .logout-link {
          color: #727274;
        }
      }
    }
    .nav-list {
      padding-bottom: 20px;
      li {
        height: 53px;
        .list-link {
          height: 100%;
          margin: 0 29px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top: 1px solid #f1f1f1;
          white-space: nowrap;
          color: #2d2e32;
          transition: 0.2s;
          &:hover {
            color: #f69701;
          }
          ion-icon {
            width: 18px;
            height: 18px;
            margin-right: 6px;
          }
        }
      }
    }
  }
}
</style>