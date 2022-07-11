<template>
  <RouterLink :to="`/editproduct/${product.id}`">
    <ion-icon name="create-outline"></ion-icon>
  </RouterLink>
  <!-- <RouterLink :to="{
    path: `/editproduct/${product.id}`,
    name: 'EditProduct',
    // params: {
    //   id: product.id,
    //   title: product.title,
    //   price: product.price,
    //   description: product.description,
    //   tags: product.tags,
    //   thumbnailBase64: product.thumbnailBase64, 
    //   photoBase64: product.photoBase64
    // }
    params:{ 
      id: product.id,
      oldTitle: product.title,
      oldPrice: product.price,
      oldDescription: product.description,
      oldTags: product.tags.toString(),
      oldThumbnail: product.thumbnail
    }
  }">
    <ion-icon name="create-outline"></ion-icon>
  </RouterLink> -->
  <img 
    v-if="product.thumbnail"
    :src="product.thumbnail" 
    :alt="product.title">
  <h4>{{ product.title}}</h4>

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