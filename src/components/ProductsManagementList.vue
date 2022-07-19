<template>
  <tr class="product-list">
    <td class="edit box">
      <button class="edit-btn">
        <RouterLink :to="{
          name: 'EditProduct',
          params:{ 
            id: product.id,
            oldTitle: product.title,
            oldPrice: product.price,
            oldDescription: product.description,
            oldTags: product.tags.toString(),
            oldThumbnailBase64: product.thumbnail,
            oldIsSoldOut: product.isSoldOut
          }
        }">
          <ion-icon name="create-outline"></ion-icon>
        </RouterLink>
      </button>
    </td>
    <td class="thumbnail box">
      <img 
      v-if="product.thumbnail"
      :src="product.thumbnail" 
      :alt="product.title">
    </td>
    <td class="title box">
      {{ product.title }}
    </td>
    <td class="price box">
      {{ product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' 원' }}
    </td>
    <td class="tags box">
      <span 
      v-for="tag in product.tags"
      :key="tag">
        # {{ tag }}
      </span>
    </td>
    <td class="description box">
      {{ product.description }}
    </td>
    <td class="soldout box">
      <span v-if="!product.isSoldOut">판매중</span>
      <span v-else>매진</span>
    </td>
    <td class="delete box">
      <button class="delete-btn" @click="deleteProduct(product.id)">
        <ion-icon name="trash-outline"></ion-icon>
      </button>
    </td>
  </tr>
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
  create() {
    console.log(this.product.photo)
  },
  methods: {
    deleteProduct(id) {
      this.indexStore.deleteProduct(id)
    }
  }
}
</script>

<style scoped lang="scss">
.product-list {
  width: 100%;
  td {
    border: 1px solid #e4e4e4;
    height: 100px;
    padding: 10px;
  }
  .box {
    vertical-align: middle;
    text-align: center;
    &.tags {
      span {
        display: inline-block;
        margin-left: 4px;
        &:first-child {
          margin-left: 0;
        }
      }
    }
    &.description {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .edit-btn, .delete-btn {
      width: 50px;
      height: 50px;
      border: 1px solid #2d2e32;
      border-radius: 10px;
      transition: 0.3s;
      ion-icon {
        width: 20px;
        height: 20px;
        color: #2d2e32;
      }
      &:hover {
        background: #ff9900;
        border: 1px solid #f97400;
        transition: 0.3s;
        ion-icon {
          color: #fcfcfc;
        }
      }
    }
  }
}
img {
  min-width: 100px;
  height: 100px;
}
</style>