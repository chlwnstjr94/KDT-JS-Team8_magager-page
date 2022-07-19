<template>
  <main>
    <section>
      <div class="head-title">
        <h2 class="page-title">제품 수정</h2>
      </div>

      <form @submit.prevent="editProduct()" class="contents">
        <h3 class="product-info">이모티콘 정보</h3>

        <article class="item-box thumbnail-box">
          <div class="thumbnail-input">
            <label>
              <span class="title">이모티콘 썸네일</span>
            </label>
            <input class="input-file thumbnail" type="file" @change="thumbnailBase64Img">
          </div>
          <div v-if="thumbnailBase64" class="img-box">
            <img :src="thumbnailBase64" :alt="title">
          </div>
          <div v-else class="img-box">
            <ion-icon name="cloud-upload-outline"></ion-icon>
          </div>
        </article>

        <article class="item-box">
          <label>
            <span class="title">이모티콘 상품명</span>
          </label>
          <input placeholder="상품명을 입력해주세요." class="input-text" type="text" v-model="title">
        </article>

        <article class="item-box">
          <label>
            <span class="title">이모티콘 태그</span>
          </label>
          <input placeholder="태그를 입력해주세요." class="input-text" type="text" v-model="tags">
        </article>

        <article class="item-box description-box">
          <label>
            <span class="title">이모티콘 상세설명</span>
          </label>
          <textarea placeholder="상세 설명을 입력해주세요." class="input-text" type="text" v-model="description"></textarea>
        </article>

        <article class="item-box">
          <label>
            <span class="title">이모티콘 가격</span>
          </label>
          <input placeholder="가격을 입력해주세요." class="input-text" type="text" v-model.number="price">
        </article>

        <article class="item-box">
          <label for="isSoldOut">
            <span v-if="!isSoldOut" class="title">이모티콘 판매중</span>
            <span v-else class="title">이모티콘 매진</span>
          </label>
          <label class="checkbox-box">
            <input type="checkbox" id="isSoldOut" class="checkbox" v-model="isSoldOut">
            <span>
              <i></i>
            </span>
          </label>
        </article>
        
        <article class="item-box">
          <label>
            <span class="title">이모티콘 상세 사진</span>
          </label>
          <input class="input-file" type="file" @change="photoBase64Img">
        </article>
        <div class="photo-box">
          <div v-if="!photoBase64" class="img-box">
            <img :src="indexStore.product.photo" :alt="title">
          </div>
          <div v-else class="img-box">
            <img :src="photoBase64" :alt="title">
          </div>
        </div>

        <div class="btn-wrap">
          <button class="edit-btn">수정 완료</button>
        </div>
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
      type: String,
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
    oldIsSoldOut: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      id: this.$route.params.id,
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
  async created() {
    await this.indexStore.productDetails(this.$route.params.id)
    console.log(this.$route.params.id)
  },
  methods: {
    editProduct() {
      this.indexStore.editProduct({
        id: this.$route.params.id,
        title: this.title,
        price: this.price,
        description: this.description, 
        tags: this.tags.split(','), 
        thumbnailBase64: this.changeThumbnail ? this.thumbnailBase64 : /(\.gif|\.jpg|\.jpeg|\.webp)$/i.test(this.thumbnailBase64) && '',
        photoBase64: this.changePhoto ? this.photoBase64 : /(\.gif|\.jpg|\.jpeg|\.webp)$/i.test(this.photoBase64) && '', 
        isSoldOut: this.isSoldOut
      })
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
  background-color: #fff;
  border: 1px solid #e6e6e6;
  padding: 0 40px 60px;
  box-sizing: border-box;
  .head-title {
    padding: 24px 0 8px;
    margin-bottom: 38px;
    border-bottom: 1px solid #2d2e32;
    position: relative;
    .page-title {
      padding: 18px 0 0;
      font-size: 32px;
    }
  }
  .contents {
    .product-info {
      margin-bottom: 12px;
      padding-top: 38px;
      font-size: 24px;
    }
    .item-box {
      position: relative;
      padding: 5px 0 5px 160px;
      display: flex;
      align-items: center;
      &.thumbnail-box {
        align-items: flex-start;
        .thumbnail-input {
          display: flex;
          align-items: center;
        }
      }
      &.description-box {
        align-items: flex-start;
        .input-text {
          width: 100%;
          height: 80px;
        }
      }
      label {
        position: absolute;
        left: 0;
        display: flex;
        align-items: center;
        .title {
          font-size: 13px;
          font-weight: bold;
        }
      }
      .img-box {
        width: 180px;
        height: 180px;
        padding: 10px;
        border: 4px dashed #e4e4e4;
        border-radius: 20px;
        margin-left: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          object-fit: cover;
        }
        ion-icon {
          width: 100%;
          height: 100%;
          color: #e4e4e4;
        }
      }
      .input-text {
        width: 380px;
        height: 40px;
        padding: 10px 15px;
        border: 1px solid #e4e4e4;
        border-radius: 10px;
        background-color: #fcfcfc;
        color: #b2b2b2;
        box-sizing: border-box;
        transition: 0.5s;
        &::placeholder {
          font-size: 13px;
          color: #b2b2b2;
        }
        &:focus {
          background-color: #fff;
          color: #2d2e32;
          border: 1px solid #2d2e32;
        }
      }
      .input-file {
        width: 380px;
        height: 40px;
        padding: 10px 15px;
        border: 1px solid #e4e4e4;
        border-radius: 10px;
        background-color: #fcfcfc;
        color: #b2b2b2;
        box-sizing: border-box;
        &.thumbnail {
          width: 300px;
        }
        &::file-selector-button {
          display: none;
        }
      }
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
    }
    .photo-box {
      margin-top: 20px;
      border-top: 1px solid #e4e4e4;
      .img-box {
        width: 100%;
        margin-top: 30px;
        padding: 10px;
        border: 4px dashed #e4e4e4;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        &:after {
          content: "";
          display: block;
          padding-bottom: 100%;
        }
        img {
          position: absolute;
          width: 90%;
          height: 90%;
          object-fit: cover;
        }
        ion-icon {
          position: absolute;
          width: 90%;
          height: 90%;
          color: #e4e4e4;
        }
      }
    }
  }
  .btn-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 40px;
    .edit-btn {
      width: 256px;
      height: 64px;
      font-size: 18px;
      color: #1e1e1e;
      background: #fcd207;
      border: 1px solid #ffbb1b;
      border-radius: 10px;
      transition: 0.5s;
      &:hover {
        background: #efc706;
        border-color: #f2b119;
      }
    }
  }
}
.checkbox {
  width: 10px;
  height: 10px;
  background: #000;
}
</style>
