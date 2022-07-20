<template>
  <main>
    <h2 class="page-title">전체 판매 내역</h2>

    <table>
      <thead>
        <tr>
          <th class="table-title"><span>구매 상태 수정</span></th>
          <th class="table-title"><span>구매 이미지</span></th>
          <th class="table-title"><span>구매자</span></th>
          <th class="table-title"><span>구매자 이메일</span></th>
          <th class="table-title"><span>구매 상품</span></th>
          <th class="table-title"><span>구매 가격</span></th>
          <th class="table-title"><span>은행명</span></th>
          <th class="table-title"><span>구매 취소</span></th>
          <th class="table-title"><span>구매 완료</span></th>
          <th class="table-title"><span>구매 시간</span></th>
        </tr>
      </thead>
      <tbody>
        <TransactionsItem
        v-for="product in indexStore.transactions"
        :key="product.id"
        :product="product" />
      </tbody>
    </table>
  </main>
</template>

<script>
import { mapStores } from 'pinia'
import { useIndexStore } from '~/store'
import TransactionsItem from '~/components/TransactionsItem.vue'

export default {
  components: {
    TransactionsItem
  },
  computed: {
    ...mapStores(useIndexStore)
  },
  async created() {
    await this.indexStore.allTransactions()
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
  overflow: auto;
  .page-title {
    width: 100%;
    display: block;
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