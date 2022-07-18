<template>
  <main>
    <h1>상세 조회</h1>

    <img 
    :src="indexStore.product.thumbnail" 
    :alt="indexStore.product.title">

    <h2>{{ indexStore.product.title }}</h2>
    <p 
      v-for="tag in indexStore.product.tags"
      :key="tag">
      # {{ tag }}
    </p>
    <p>{{ indexStore.product.description }}</p>
    <p>{{ indexStore.product.price }}</p>
    <img 
    :src="indexStore.product.photo" 
    :alt="indexStore.product.title">
  </main>
</template>

<script>
import { mapStores } from 'pinia'
import { useIndexStore } from '~/store'

export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    ...mapStores(useIndexStore)
  },
  async created() {
    await this.indexStore.productDetails(this.id);
  },
  methods: {
    async productDetails() {
      await this.indexStore.productDetails({
        id: this.id
      });
    }
  }
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  min-height: 100vh;
  background-color: #eee;
}
</style>