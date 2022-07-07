<template>
<h1>전체 판매 내역</h1>
</template>

<script>
import { mapStores } from 'pinia'
import { useIndexStore } from '~/store'

export default {
  computed: {
    ...mapStores(useIndexStore)
  },
  methods: {
    allTransactions() {
      this.indexStore.allTransactions({
        detailId: this.detailId,
        user: this.user,
        account: this.account,
        product: this.product,
        reservation: this.reservation,
        timePaid: this.timePaid,
        isCanceled: this.isCanceled,
        done: this.done
      })
    }
  }
}
</script>