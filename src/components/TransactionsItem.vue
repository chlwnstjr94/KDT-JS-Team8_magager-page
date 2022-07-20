<template>
  <tr class="product-list">
    <td class="edit box">
      <button class="edit-btn" @click="purchaseState">
        <ion-icon name="create-outline"></ion-icon>
      </button>
    </td>
    <td class="thumbnail box">
      <img :src="product.product.thumbnail" :alt="product.product.title">
    </td>
    <td class="displayName box">
      {{ product.user.displayName }}
    </td>
    <td class="email box">
      {{ product.user.email }}
    </td>
    <td class="title box">
      {{ product.product.title }}
    </td>
    <td class="price box">
      {{ product.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' 원' }}
    </td>
    <td class="bank box">
      {{ product.account.bankName }}
    </td>
    <td class="isCanceled box">
      <label for="isCanceled">
        <span v-if="!isCanceled">구매 미취소</span>
        <span v-else>구매 취소</span>
      </label>
      <label class="checkbox-box">
        <input type="checkbox" id="isCanceled" class="checkbox" v-model="isCanceled">
        <span>
          <i></i>
        </span>
      </label>
    </td>
    <td class="done box">
      <label for="done">
        <span v-if="!done">구매 미완료</span>
        <span v-else>구매 완료</span>
      </label>
      <label class="checkbox-box">
        <input type="checkbox" id="done" class="checkbox" v-model="done">
        <span>
          <i></i>
        </span>
      </label>
    </td>
    <td class="timePaid box">
      {{ new Date(product.timePaid).toLocaleString() }}
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
  data() {
    return {
      detailId: this.product.detailId,
      isCanceled: this.product.isCanceled,
      done: this.product.done
    }
  },
  computed: {
    ...mapStores(useIndexStore)
  },
  methods: {
    purchaseState() {
      this.indexStore.transactionsCanceled({
        detailId: this.detailId,
        isCanceled: this.isCanceled,
        done: this.done
      })
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
    .checkbox-box {
      display: inline-block;
      position: relative;
      width: 60px;
      height: 30px;
      cursor: pointer;
      .checkbox {
        position: relative;
        z-index: 1;
        appearance: none;
        display: none;
        &:checked {
          & ~ span {
            background: #05be05;
            i {
              left: 33px;
            }
          }
        }
      }
      span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fe0000;
        border-radius: 30px;
        transition: 0.5s;
        i {
          position: absolute;
          top: 4px;
          left: 5px;
          width: 22px;
          height: 22px;
          background: #fff;
          border-radius: 50%;
          transition: 0.5s;
        }
      }
    }
    .edit-btn {
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
    &.timePaid {
      white-space: nowrap;
    }
  }
  .isCanceled, .done {
    label {
      display: block;
      &:last-child {
        margin-top: 10px;
      }
      span {
        white-space: nowrap;
      }
    }
  }
}
img {
  min-width: 100px;
  height: 100px;
}
</style>