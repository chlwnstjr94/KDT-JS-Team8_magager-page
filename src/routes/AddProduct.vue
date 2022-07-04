<template>
  <main>
    <form @submit.prevnet="addProduct" class="input-box">
      <h1>제품 추가</h1>

      <label for="product-thumbnail">이모티콘 썸네일</label>
      <input type="file" id="product-thumbnail" @change="thumbnailBase64Img">

      <label for="product-title">이모티콘 상품명</label>
      <input type="text" id="product-title" v-model="title">

      <label for="product-tags">이모티콘 태그명</label>
      <input type="text" id="product-tags" v-model="tags">

      <label for="product-desc">이모티콘 상세설명</label>
      <input type="text" id="product-desc" v-model="description">

      <label for="product-price">이모티콘 가격</label>
      <input type="text" id="product-price" v-model.number="price">

      <label for="product-photo">이모티콘 상세 사진</label>
      <input type="file" id="product-photo" @change="photoBase64Img">

      <button type="submit" @click="addProduct">제출하기</button>
    </form>
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
      photoBase64: ''
    }
  },
  computed: {
    ...mapStores(useIndexStore)
  },
  methods: {
    addProduct() {
      this.indexStore.addProduct({
        title: this.title,
        price: this.price,
        description: this.description, 
        tags: this.tags.split(','), 
        thumbnailBase64: this.thumbnailBase64, 
        photoBase64: this.photoBase64
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
