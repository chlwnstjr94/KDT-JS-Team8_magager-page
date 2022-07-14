<template>
  <button>
    <RouterLink :to="{
      name: 'EditProduct',
      params:{ 
        id: product.id,
        oldTitle: product.title,
        oldPrice: product.price,
        oldDescription: product.description,
        oldTags: product.tags.toString(),
        oldThumbnailBase64: product.thumbnail,
        oldIsSoldout: product.isSoldout
      }
    }">
      <ion-icon name="create-outline"></ion-icon>
    </RouterLink>
  </button>
  <!-- <button
  @click="$router.push(`/editproduct/${product.id}`)">
    <ion-icon name="create-outline"></ion-icon>
  </button> -->
  <img 
    v-if="product.thumbnail"
    :src="product.thumbnail" 
    :alt="product.title">
  <h4>{{ product.title }}</h4>
  <h4>{{ product.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + '원' }}</h4>

  <button @click="deleteProduct(product.id)">
    <ion-icon name="trash-outline"></ion-icon>
  </button>
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
  },
  methods: {
    deleteProduct(id) {
      this.indexStore.deleteProduct(id)
    }
  }
}
</script>

<style scoped lang="scss">
img {
  width: 100px;
  height: 100px;
}
</style>