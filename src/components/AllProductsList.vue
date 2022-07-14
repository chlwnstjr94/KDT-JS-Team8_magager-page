<template>
  <div class="product-box">
    <img 
    v-if="product.thumbnail"
    :src="product.thumbnail" 
    :alt="product.title">
    <h4>{{ product.title}}</h4>
    <h4>{{ product.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + '원' }}</h4>
    <h4 
      v-for="tag in product.tags"
      :key="tag">
    # {{ tag }}
    </h4>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useIndexStore } from '~/store'

export default {
  props: {
    product: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    ...mapStores(useIndexStore)
  }
}
</script>

<style scoped lang="scss">
img {
  width: 100px;
  height: 100px;
}
</style>