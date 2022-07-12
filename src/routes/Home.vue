<template>
  <main>
    <h1>제품 조회</h1>

    <ul>
      <AllProductsList
        v-for="product in indexStore.allProducts"
        :key="product.id"
        :product="product"
        @click="$router.push(`/detailsproduct/${product.id}`)"/>
    </ul>
  </main>
</template>

<script>
import { mapStores } from 'pinia'
import { useIndexStore } from '~/store'
import AllProductsList from '~/components/AllProductsList.vue'

export default {
  components: {
    AllProductsList
  },
  computed: {
    ...mapStores(useIndexStore)
  },
  created() {
    this.indexStore.allProduct()
  },
  // methods: {
  //   allProducts() {
  //     this.indexStore.allProduct({
  //       id: this.id,
  //       title: this.title,
  //       price: this.price,
  //       description: this.description,
  //       tags: this.tags.split(','),
  //       thumbnail: this. thumbnail,
  //       isSoldOut: this.isSoldOut
  //     })
  //   }
  // }
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  min-height: 100vh;
  background-color: #eee;
}
</style>