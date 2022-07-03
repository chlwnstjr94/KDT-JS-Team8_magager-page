<template>
  <TheHeader />
  <div class="main">
    <TheNav />
    <RouterView />
  </div>
  <TheFooter />
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheNav from '~/components/TheNav.vue'
import TheFooter from '~/components/TheFooter'
import './routes/guards'

export default {
  components: {
    TheHeader,
    TheNav,
    TheFooter
  }
}
</script>

<style scoped lang="scss">
.main {
  display: flex;
  align-items: flex-start;
}
</style>
