import { defineStore } from 'pinia'
import axios from 'axios'

const BASE_URL = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api'
export const useIndexStore = defineStore('index', {
  state() {
    return {
      product: {},
      allProducts: [],
      transactions: [],
      title: '',
      price: '',
      description: '', 
      tags: '', 
      thumbnailBase64: '', 
      photoBase64: '',
      id: '',
      isSoldOut: false,
      detailId: '',
      isCanceled: false,
      done: false
    }
  },
  actions: {
    async addProduct(payload) {
      const { title, price, description, tags, thumbnailBase64, photoBase64 } = payload
      try {
        const res = await axios(
          {
            url: `${BASE_URL}/products`,
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              apikey: 'FcKdtJs202204',
              username: 'KDT2TEAM8',
              masterKey: true
            },
            data: {
              title,
              price,
              description, 
              tags, 
              thumbnailBase64, 
              photoBase64
            }
          }
        )
        console.log(res.data)
        this.allProducts = res.data

        window.location.href = '/'
      } catch {
        console.log(error.response.data)
      }
    },
    
    async allProduct() {
      const res = await axios('https://asia-northeast3-heropy-api.cloudfunctions.net/api/products', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          apikey: 'FcKdtJs202204',
          username: 'KDT2TEAM8',
          masterKey: true
        }
      })
      console.log(res.data)
      this.allProducts = res.data
    },

    async productDetails(id) {
      const res = await axios(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/${id}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          apikey: 'FcKdtJs202204',
          username: 'KDT2TEAM8'
        }
      })
      console.log(res.data)
      this.product = res.data
    },

    async allTransactions() {
      const res = await axios('https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/transactions/all', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          apikey: 'FcKdtJs202204',
          username: 'KDT2TEAM8',
          masterKey: true
        }
      })
      this.transactions = res.data
    },

    async transactionsCanceled(payload) {
      const { detailId, isCanceled, done } = payload
      const res = await axios(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/transactions/${detailId}`, {
        detailId,
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          apikey: 'FcKdtJs202204',
          username: 'KDT2TEAM8',
          masterKey: true
        },
        data: {
          isCanceled,
          done
        }
      })
      this.transactions = res.data
    },

    async editProduct(payload) {
        const { id, title, price, description, tags, thumbnailBase64, photoBase64, isSoldOut } = payload
        const res = await axios({
          url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/${id}`,
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
            apikey: 'FcKdtJs202204',
            username: 'KDT2TEAM8',
            masterKey: true
          },
          data: {
            title, 
            price, 
            description, 
            tags, 
            thumbnailBase64, 
            photoBase64, 
            isSoldOut
          }
        })
        console.log(res.data)
        this.product = res.data

        // window.location.href = '/allproduct'
    },

    async deleteProduct(id) {
        await axios(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/${id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          apikey: 'FcKdtJs202204',
          username: 'KDT2TEAM8',
          masterKey: true
        }
      })
      this.allProduct()
    }
  }
})
