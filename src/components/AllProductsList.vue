<template>
  <li class="product-box">
    <img 
    v-if="product.thumbnail"
    :src="product.thumbnail" 
    :alt="product.title">
    <h4>{{ product.title}}</h4>
  </li>
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
.product-box {
  width: 160px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #e6e6e6;
  border-radius: 12px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.06);
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }
  img {
    width: 100px;
    height: 100px;
  }
  h4 {
    width: 80%;
    text-align: center; 
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    &:hover {
      font-weight: bold;
      text-decoration: underline;
    }
  }
}
</style>