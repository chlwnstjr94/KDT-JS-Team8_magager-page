<template>
  <main>
    <h1>제품 관리</h1>

    <ul>
      <ProductsManagementList
        v-for="product in indexStore.allProducts"
        :key="product.id"
        :product="product"/>
    </ul>
  </main>
</template>

<script>
import { mapStores } from 'pinia'
import { useIndexStore } from '~/store'
import ProductsManagementList from '~/components/ProductsManagementList.vue'

export default {
  components: {
    ProductsManagementList
  },
  computed: {
    ...mapStores(useIndexStore)
  },
  created() {
    this.indexStore.allProduct()
  },
  methods: {
    allProducts() {
      this.indexStore.allProduct({
        id: this.id,
        title: this.title,
        price: this.price,
        description: this.description,
        tags: this.tags.split(','),
        thumbnail: this. thumbnail,
        isSoldOut: this.isSoldOut
      })
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