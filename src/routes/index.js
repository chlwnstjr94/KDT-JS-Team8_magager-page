import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import AllProduct from './AllProduct.vue'
import AddProduct from './AddProduct.vue'
import TransactionsAll from './TransactionsAll.vue'
import EditProduct from './EditProduct.vue'
import DetailsProduct from './DetailsProduct.vue'
import Login from './Login.vue'
import SignUp from './SignUp.vue'
import EditUser from './EditUser.vue'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/allproduct',
      component: AllProduct,
    },
    {
      name: 'EditProduct',
      path: '/editproduct/:id',
      component: EditProduct,
      props: true
    },
    {
      path: '/addproduct',
      component: AddProduct,
    },
    {
      path: '/transactionsall',
      component: TransactionsAll,
    },
    {
      path: '/detailsproduct/:id',
      component: DetailsProduct,
    },
    {
      path: '/login',
      component: Login,
    }
  ]
})
