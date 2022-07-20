<template>
  <main>
    <div class="head-box">
      <div class="img-emoticon">Open stuido</div>
    </div>

    <ul class="product-list">
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
  }
}
</script>

<style lang="scss" scoped>
main {
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 40px 60px;
  .head-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 42px 0 8px;
    margin-bottom: 32px;
    .img-emoticon {
      width: 188px;
      height: 37px;
      background: url(https://emoticonstudio.kakao.com/assets/img_emoticon-ea608e99e1dc9b9ce96ee6e5a5e906ff88d982ff4c564358eb2dd6420a47d551.png) no-repeat;
      background-position: 0 -340px;
      text-indent: -9999px;
      position: relative;
    }
  }
  .product-list {
    margin-top: 20px;
    padding: 0 20px;
    gap: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>