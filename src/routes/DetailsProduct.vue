<template>
  <h1>상세 조회</h1>

  <img 
  :src="indexStore.product.thumbnail" 
  :alt="indexStore.product.title">

  <h2>{{ indexStore.product.title }}</h2>
  <p>{{ indexStore.product.tags }}</p>
  <p>{{ indexStore.product.description }}</p>
  <p>{{ indexStore.product.price }}</p>
  <img 
  :src="indexStore.product.photo" 
  :alt="indexStore.product.title">
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
  created() {
    this.indexStore.productDetails(this.id)
  },
  methods: {
    tags(){
      const tags = indexStore.product.tags
      return 
    },
    productDetails(id) {
      this.indexStore.productDetails(id)
    }
  }
}
</script>