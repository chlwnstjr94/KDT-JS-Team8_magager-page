<template>
  <div class="body">
    <TheHeader />
    <main class="main">
      <TheNav />
      <RouterView />
    </main>
    <TheFooter />
  </div>
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
.body {
  background: #FCFCFC;
  .main {
    display: flex;
    align-items: flex-start;
    margin: 20px 10px;
    gap: 10px;
  }
}
</style>
