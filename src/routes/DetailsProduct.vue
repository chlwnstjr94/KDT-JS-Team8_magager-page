<template>
  <main>
    <section class="detail-box">
      <artile class="detail-img-box">
        <img 
        class="detail-thumbnail"
        :src="indexStore.product.thumbnail" 
        :alt="indexStore.product.title">
      </artile>

      <article class="detail-info">
        <h2 class="detail-title">{{ indexStore.product.title }}</h2>
        <div class="detail-tags">
          <span 
            v-for="tag in indexStore.product.tags"
            :key="tag"
            class="tag"
          >
            # {{ tag }}
          </span>
        </div>
        <p class="detail-price">{{ indexStore.product.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + '원' }}</p>
        <p class="detail-description">{{ indexStore.product.description }}</p>
      </article>
    </section>
    <div class="photo-box">
      <img 
      class="detail-photo"
      :src="indexStore.product.photo" 
      :alt="indexStore.product.title">
    </div>
  </main>
</template>

<script>
import { mapStores } from 'pinia'
import { useIndexStore } from '~/store'

export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    ...mapStores(useIndexStore)
  },
  async created() {
    await this.indexStore.productDetails(this.id);
  },
  methods: {
    async productDetails() {
      await this.indexStore.productDetails({
        id: this.id
      });
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
  .detail-box {
    width: 100%;
    padding: 90px 80px 40px;
    display: flex;
    justify-content: center;
    flex-grow: 1;
    .detail-img-box {
      width: 300px;
      display: flex;
      justify-content: center;
      .detail-thumbnail {
        width: 180px;
        height: 180px;
      }
    }
    .detail-info {
      .detail-title {
        font-size: 30px;
        font-weight: bold;
      }
      .detail-tags {
        margin: 10px 0 20px;
        .tag {
          color: #999;
        }
      }
      .detail-price {
        font-size: 24px;
        font-weight: bold;
        color: #fa4637;
      }
      .detail-description {
        margin-top: 20px;
        color: #999;
      }
    }
  }
  .photo-box {
    background: #fafafa;
    padding: 0 40px;
    .detail-photo {
      width: 100%;
    }
  }
}
</style>