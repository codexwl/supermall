import Vue from 'vue'
import Router from 'vue-router'
const Home =()=>import('../views/home/home')
const Profile = () => import('../views/profile/profile')
const Cart = () => import('../views/cart/cart')
const Category = () => import('../views/category/category')

Vue.use(Router)

const routes =[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/profile',
    component:Profile
  },
]

const router =new Router({
  routes,
  mode:'history'
})

export default  router
