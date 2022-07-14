<template>
  <main>
    <h1>전체 판매 내역</h1>

    <ul>
      <li
        v-for="product in indexStore.allTransactions"
        :key="product.id"
        :product="product">
        {{ product.title }}
        {{ product.user.email }}
        {{ product.user.displayName }}
        {{ product.user.profileImg }}

        <div class="isCanceled">
          <input type="checkbox" id="isCanceled" class="checkbox" v-model="canceled">
          <label for="isCanceled">isCanceled: {{ isCanceled }}</label>
        </div>
        <div class="done">
          <input type="checkbox" id="done" class="checkbox" v-model="done">
          <label for="done">done: {{ done }}</label>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
import { mapStores } from 'pinia'
import { useIndexStore } from '~/store'

export default {
  data() {
    return {
      isCanceled: false,
      done: false
    }
  },
  computed: {
    ...mapStores(useIndexStore)
  },
  created() {
    this.indexStore.allTransactions()
  },
  methods: {
    canceled() {
      const detailId = this.$route.params.detailId
      if (this.isCanceled) {
        this.indexStore.transactionsCanceled({
          detailId,
          isCanceled: true
        })
      } else {
        this.indexStore.transactionsCanceled({
          detailId,
          isCanceled: false
        })
      }
    },
    done() {
      const detailId = this.$route.params.detailId
      if (this.done) {
        this.indexStore.transactionsCanceled({
          detailId,
          done: true
        })
      } else {
        this.indexStore.transactionsCanceled({
          detailId,
          done: false
        })
      }
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
.checkbox {
  width: 10px;
  height: 10px;
  background: #000;
}
</style>