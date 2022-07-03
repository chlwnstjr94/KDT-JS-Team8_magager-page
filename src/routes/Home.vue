<template>
  <main>
    <h1>Home page..</h1>
  </main>
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
main {
  height: 100vh;
}
</style>
