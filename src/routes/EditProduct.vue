<template>
  <main>
    <section>
      <h1>제품 수정</h1>

      <form @submit.prevent="editProduct()">
        <article class="info-box">
          <p>이모티콘 썸네일</p>
          <img :src="thumbnailBase64" :alt="title">
          <input type="file"  @change="thumbnailBase64Img">
        </article>
        <article class="info-box">
          <p>이모티콘 상품명</p>
          <input type="text" v-model="title">
        </article>
        <article class="info-box">
          <p>이모티콘 태그명</p>
          <input type="text" v-model="tags">
        </article>
        <article class="info-box">
          <p>이모티콘 상세설명</p>
          <input type="text" v-model="description">
        </article>
        <article class="info-box">
          <p>이모티콘 가격</p>
          <input type="text" v-model.number="price">
        </article>
        <article class="info-box">
          <p v-if="isSoldOut">이모티콘 판매중</p>
          <p v-else>이모티콘 매진</p>
          <input type="checkbox" class="checkbox" v-model="isSoldOut">
        </article>
        <article class="info-box">
          <p>이모티콘 상세 사진</p>
          <img v-if="!photoBase64" :src="indexStore.product.photo" :alt="title">
          <img v-else :src="photoBase64" :alt="title">
          <input type="file" @change="photoBase64Img">
        </article>
        <button>수정 완료</button>
      </form>
    </section>
  </main>
</template>

<script>
import { mapStores } from 'pinia'
import { useIndexStore } from '~/store'

export default {
  props:{
    oldTitle: {
      type: String,
      default: ''
    },
    oldPrice: {
      type: Number,
      default: ''
    },
    oldDescription: {
      type: String,
      default: ''
    },
    oldTags: {
      type: Array,
      default: () => []
    },
    oldThumbnailBase64: {
      type: String,
      default: ''
    },
    oldIsSoldout: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      title: this.oldTitle,
      price: this.oldPrice,
      description: this.oldDescription, 
      tags: this.oldTags, 
      thumbnailBase64: this.oldThumbnailBase64, 
      photoBase64: this.photoBase64,
      isSoldOut: this.oldIsSoldout,
      changeThumbnail: false,
      changePhoto: false
    }
  },
  computed: {
    ...mapStores(useIndexStore)
  },
  created() {
    this.indexStore.productDetails(this.$route.params.id)
  },
  methods: {
    editProduct() {
      if (this.changeThumbnail && this.changePhoto) {
        this.indexStore.editProduct({
          id: this.$route.params.id,
          title: this.title,
          price: this.price,
          description: this.description, 
          tags: this.tags.split(','), 
          thumbnailBase64: this.thumbnailBase64,
          photoBase64: this.photoBase64, 
          isSoldOut: this.isSoldOut
        })
      } else if (this.changeThumbnail && !this.changePhoto) {
        this.indexStore.editProduct({
          id: this.$route.params.id,
          title: this.title,
          price: this.price,
          description: this.description, 
          tags: this.tags.split(','), 
          thumbnailBase64: this.thumbnailBase64,
          photoBase64: /(\.gif|\.jpg|\.jpeg|\.webp)$/i.test(this.photoBase64) && '', 
          isSoldOut: this.isSoldOut
        })
      } else if (!this.changeThumbnail && this.changePhoto) {
        this.indexStore.editProduct({
          id: this.$route.params.id,
          title: this.title,
          price: this.price,
          description: this.description, 
          tags: this.tags.split(','), 
          thumbnailBase64: /(\.gif|\.jpg|\.jpeg|\.webp)$/i.test(this.thumbnailBase64) && '',
          photoBase64: this.photoBase64, 
          isSoldOut: this.isSoldOut
        })
      } else {
        this.indexStore.editProduct({
          id: this.$route.params.id,
          title: this.title,
          price: this.price,
          description: this.description, 
          tags: this.tags.split(','), 
          thumbnailBase64: /(\.gif|\.jpg|\.jpeg|\.webp)$/i.test(this.thumbnailBase64) && '',
          photoBase64: /(\.gif|\.jpg|\.jpeg|\.webp)$/i.test(this.photoBase64) && '', 
          isSoldOut: this.isSoldOut
        })
      }
    },
    thumbnailBase64Img(event) {
      this.changeThumbnail = true
      const { files } = event.target
      for (const file of files) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.addEventListener('load', event => {
          this.thumbnailBase64 = event.target.result
        })
      }
    },
    photoBase64Img(event) {
      this.changePhoto = true
      const { files } = event.target
      for (const file of files) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.addEventListener('load', event => {
          this.photoBase64 = event.target.result
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
