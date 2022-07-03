import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import AllProduct from './AllProduct'
import AddProduct from './AddProduct'
import Login from './Login.vue'
import SignUp from './SignUp.vue'
import EditUser from './EditUser.vue'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/allproduct',
      component: AllProduct,
    },
    {
      path: '/addproduct',
      component: AddProduct,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/signup',
      component: SignUp,
    },
    {
      path: '/user',
      component: EditUser,
    }
  ],
})
