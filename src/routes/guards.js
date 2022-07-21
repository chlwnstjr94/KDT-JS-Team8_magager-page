import router from './index'
import { validateTokenUser } from '~/core'
import { useUserStore } from '~/store/user'

router.beforeEach(async (to) => {
  if (to.path.includes('/allproduct')) {
    // 토큰 없는 경우
    const accessToken = window.localStorage.getItem('token')
    if (!accessToken) {
      console.log('로그인 해주세요!')
      return '/login'
    } else {
      const user = await validateTokenUser(accessToken)
      if (user.data.email === 'testAdmin@admin.com') {
        return true
      } else {
        console.log('관리자가 아닙니다!')
        useUserStore().logoutUser()
        return '/login'
      }
    }
  }
  if (to.path.includes('/transactionsall')) {
    // 토큰 없는 경우
    const accessToken = window.localStorage.getItem('token')
    if (!accessToken) {
      console.log('로그인 해주세요!')
      return '/login'
    } else {
      const user = await validateTokenUser(accessToken)
      if (user.data.email === 'testAdmin@admin.com') {
        return true
      } else {
        console.log('관리자가 아닙니다!')
        useUserStore().logoutUser()
        return '/login'
      }
    }
  }
  return true
})
