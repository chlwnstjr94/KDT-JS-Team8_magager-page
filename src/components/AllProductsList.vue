<template>
    <img 
      v-if="product.thumbnail"
      :src="product.thumbnail" 
      :alt="product.title">
    <h4>{{ product.title}}</h4>
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