import { createRouter, createWebHistory } from 'vue-router'
import homepage from '../Views/homepage/homepage.vue'
import product1 from '../Views/product-service/product1.vue'
import product2 from '../Views/product-service/product2.vue'
import product3 from '../Views/product-service/product3.vue'
import Product4 from '../Views/product-service/product4.vue'
import Product5 from '../Views/product-service/product5.vue'
import Product6 from '../Views/product-service/product6.vue'
import Membercardpage1 from '../Views/member/membercard/membercardpage1.vue'
import Membercardpage2 from '../Views/member/membercard/membercardpage2.vue'
import Membercardpage3 from '../Views/member/membercard/membercarpage3.vue'
import Contact from '../Views/Contact/contact.vue'
import Membercardpage2_1 from '../Views/member/membermobilebanking/membercardpage2_1.vue'
import Membercardpage2_2 from '../Views/member/membermobilebanking/membercardpage2_2.vue'
import membercardpage2_3 from '../Views/member/membermobilebanking/membercarpage2_3.vue'
import Joinus from '../Views/joinus/joinus.vue'
import Vision_mission from '../Views/About-us/vision_mission.vue'
import Role from '../Views/About-us/Role.vue'

import Board_of_director from '../Views/About-us/board_of_director.vue'
import History from '../Views/About-us/History.vue'
import companystructure from '../Views/About-us/companystructure.vue'




const routes = [
  //#################### Products Path #####################
  { path: '/', name: 'Home', component: homepage },
  { path: '/products-service/products-1', name: 'product1', component: product1 },
  { path: '/products-service/products-2', name: 'product2', component: product2 },
  { path: '/products-service/products-3', name: 'product3', component: product3 },
  { path: '/products-service/products-4', name: 'product4', component: Product4 },
  { path: '/products-service/products-5', name: 'product5', component: Product5 },
  { path: '/products-service/products-6', name: 'product6', component: Product6 },


  //######################## Member Path ###########################
  { path: '/membercard/member1', name: 'member1', component: Membercardpage1 },
  { path: '/membercard/member2', name: 'member2', component: Membercardpage2 },
  { path: '/membercard/member3', name: 'member3', component: Membercardpage3 },

  { path: '/membermobilebanking/member2_1', name: 'mobilebanking2_1', component: Membercardpage2_1 },
  { path: '/membermobilebanking/member2_2', name: 'mobilebanking2_2', component: Membercardpage2_2 },
  { path: '/membermobilebanking/member2_3', name: 'mobilebanking2_3', component: membercardpage2_3 },
  //######################## Contact Us ###########################
  { path: '/contact', name: 'contact', component: Contact },


  //######################## Join Us ###########################
  { path: '/joinus', name: 'joinus', component: Joinus },


  //######################## About Us ###########################
  { path: '/vision_mission', name: 'vision_mission', component: Vision_mission },
  { path: '/role', name: 'role', component: Role },
  { path: '/History', name: 'History', component: History },

  { path: '/board_of_director', name: 'history', component: Board_of_director },
  { path: '/companystructure', name: 'company', component: companystructure },


  //######################## BlogNews ###########################
  



]




const router = createRouter({
  history: createWebHistory(),
  routes,






})

export default router

