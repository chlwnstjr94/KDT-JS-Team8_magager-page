<template>
  <main>
    <h2 class="page-title">제품 관리</h2>

    <table>
      <thead>
        <tr>
          <th class="table-title"><span>제품 수정</span></th>
          <th class="table-title"><span>제품 썸네일</span></th>
          <th class="table-title"><span>제품명</span></th>
          <th class="table-title"><span>제품 가격</span></th>
          <th class="table-title"><span>제품 태그</span></th>
          <th class="table-title"><span>제품 상세 내용</span></th>
          <th class="table-title"><span>제품 판매 / 매진</span></th>
          <th class="table-title"><span>제품 삭제</span></th>
        </tr>
      </thead>
      <tbody>
        <ProductsManagementList
        v-for="product in indexStore.allProducts"
        :key="product.id"
        :product="product"/>
      </tbody>
    </table>
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
  background-color: #fff;
  border: 1px solid #e6e6e6;
  padding: 0 40px 60px;
  box-sizing: border-box;
  .page-title {
    padding: 42px 0 8px;
    margin-bottom: 38px;
    border-bottom: 1px solid #2d2e32;
    font-size: 32px;
    position: relative;
  }
  table {
    width: 100%;
    border: 1px solid #e4e4e4;
    tr, th {
      border: 1px solid #e4e4e4;
    }
    th {
      padding: 10px;
      white-space: nowrap;
    }
    .table-title {
      min-width: 100px;
      text-align: center;
      vertical-align: middle;
    }
  }
}
</style>