<template>
  <main>
    <section>
      <h1>제품 추가</h1>

      <article class="info-box">
        <p>이모티콘 썸네일</p>
        <input type="file" @change="thumbnailBase64Img">
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
        <p>이모티콘 상세 사진</p>
        <input type="file" @change="photoBase64Img">
      </article>

      <button @click="addProduct">제출하기</button>
    </section>
  </main>
</template>

<script>
import { mapStores } from 'pinia'
import { useIndexStore } from '~/store'

export default {
  data() {
    return {
      title: '',
      price: 100,
      description: '', 
      tags: '', 
      thumbnailBase64: '', 
      photoBase64: '',
      isSoldOut: false
    }
  },
  computed: {
    ...mapStores(useIndexStore)
  },
  methods: {
    addProduct() {
      this.indexStore.productUpdated({
        title: this.title,
        price: this.price,
        description: this.description, 
        tags: this.tags.split(','), 
        thumbnailBase64: this.thumbnailBase64, 
        photoBase64: this.photoBase64,
        isSoldOut: this.isSoldOut
      })
    },
    thumbnailBase64Img(event) {
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
  height: 100vh;
  background-color: #eee;
}
</style>
