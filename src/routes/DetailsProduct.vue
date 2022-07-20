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
        <p class="detail-price">{{ price }}</p>
        <p class="detail-description">{{ indexStore.product.description }}</p>
      </article>
    </section>
    <section class="photo-box">
      <div class="photo-img-box">
        <img 
        class="detail-photo"
        :src="indexStore.product.photo" 
        :alt="indexStore.product.title">
      </div>
    </section>
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
    ...mapStores(useIndexStore),
    price() {
      const price = Number(this.indexStore.product.price)
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' 원'
    }
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
    max-width: 1024px;
    margin: 0 auto;
    padding: 90px 80px 40px;
    display: flex;
    justify-content: center;
    gap: 40px;
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
      flex-grow: 1;
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
    width: 100%;
    background: #fafafa;
    padding: 0 80px;
    .photo-img-box {
      max-width: 1024px;
      margin: 0 auto;
      .detail-photo {
        width: 100%;
      }
    }
  }
}
</style>