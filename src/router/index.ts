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

import Board_of_director from '../Views/About-us/board_director/board_of_director.vue'
import History from '../Views/About-us/History.vue'
import companystructure from '../Views/About-us/companystructure/companystructure.vue'
// import gridblogpage1 from '../Views/Blog/gridblog/gridblogpage1.vue'

// import gridblogpage2 from '../Views/Blog/gridblog/gridblogpage2.vue'
// import gridblogpage3 from '../Views/Blog/gridblog/gridblogpage3.vue'
// import gridblogpage4 from '../Views/Blog/gridblog/gridblogpage4.vue'
// import gridblogpage5 from '../Views/Blog/gridblog/gridblogpage5.vue'
// import gridblogpage6 from '../Views/Blog/gridblog/gridblogpage6.vue'
// import gridblogpage7 from '../Views/Blog/gridblog/gridblogpage7.vue'
// import gridblogpage8 from '../Views/Blog/gridblog/gridblogpage8.vue'
// import gridblogpage9 from '../Views/Blog/gridblog/gridblogpage9.vue'
// import gridblogpage10 from '../Views/Blog/gridblog/gridblogpage10.vue'
import Blogdetail1 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail1.vue'
import Blogdetail2 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail2.vue'
import Blogdetail3 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail3.vue'
import Blogdetail4 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail4.vue'
import Blogdetail5 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail5.vue'
import Blogdetail6 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail6.vue'
import Blogdetail7 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail7.vue'
import Blogdetail8 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail8.vue'
import Blogdetail9 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail9.vue'
import Blogdetail10 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail10.vue'
import Blogdetail11 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail11.vue'
import Blogdetail12 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail12.vue'
import Blogdetail13 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail13.vue'
import Blogdetail14 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail14.vue'
import Blogdetail15 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail15.vue'
import Blogdetail16 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail16.vue'
import Blogdetail17 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail17.vue'
import Blogdetail18 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail18.vue'
import Blogdetail19 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail19.vue'
import Blogdetail20 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail20.vue'
import Blogdetail21 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail21.vue'
import Blogdetail22 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail22.vue'
import Blogdetail23 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail23.vue'
import Blogdetail24 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail24.vue'
import Blogdetail25 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail25.vue'
import Blogdetail26 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail26.vue'
import Blogdetail27 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail27.vue'
import Blogdetail28 from '../Views/Blog/blogdetailpage/blogdetail/blogdetail28.vue'

import blogdetail1 from '../Views/Blog/fromhomepage/blogdetail1.vue'
import blogdetail2 from '../Views/Blog/fromhomepage/blogdetail2.vue'
import blogdetail3 from '../Views/Blog/fromhomepage/blogdetail3.vue'
import blogdetail4 from '../Views/Blog/fromhomepage/blogdetail4.vue'
import blogdetail5 from '../Views/Blog/fromhomepage/blogdetail5.vue'
import blogdetail6 from '../Views/Blog/fromhomepage/blogdetail6.vue'


import board_of_director1 from '../Views/About-us/board_director/board_of_director1.vue'
import board_of_director2 from '../Views/About-us/board_director/board_of_director2.vue'
import board_of_director3 from '../Views/About-us/board_director/board_of_director3.vue'
import board_of_director4 from '../Views/About-us/board_director/board_of_director4.vue'
import Companystructure_office from '../Views/About-us/companystructure/companystructure_office.vue'
import Companystructure_finance from '../Views/About-us/companystructure/companystructure_finance.vue'
import Companystructure_it from '../Views/About-us/companystructure/companystructure_it.vue'
import Companystructure_operation from '../Views/About-us/companystructure/companystructure_operation.vue'
import Companystructure_audit from '../Views/About-us/companystructure/companystructure_audit.vue'
import Companystructure_ceo from '../Views/About-us/companystructure/companystructure_ceo.vue'
import Gridblogtheme1 from '../Views/Blog/gridblog_column/gridblogtheme1.vue'
import Gridblogtheme2 from '../Views/Blog/gridblog_column/gridblogtheme2.vue'
import Gridblogtheme3 from '../Views/Blog/gridblog_column/gridblogtheme3.vue'
import Gridblogtheme4 from '../Views/Blog/gridblog_column/gridblogtheme4.vue'






// #######################

const router = createRouter({
  history: createWebHistory(),
  routes: [
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



    //######################## BlogNews Grid ###########################


    { path: '/page/1', name: 'gridblogpage1', component: Gridblogtheme1 },
    { path: '/page/2', name: 'gridblogpage2', component: Gridblogtheme2 },
    { path: '/page/3', name: 'gridblogpage3', component: Gridblogtheme3 },
    { path: '/page/4', name: 'gridblogpage4', component: Gridblogtheme4 },


    // { path: '/page/2', name: 'gridblogpage2', component: gridblogpage2 },
    // { path: '/page/3', name: 'gridblogpage3', component: gridblogpage3 },
    // { path: '/page/4', name: 'gridblogpage4', component: gridblogpage4 },
    // { path: '/page/5', name: 'gridblogpage5', component: gridblogpage5 },
    // { path: '/page/6', name: 'gridblogpage6', component: gridblogpage6 },
    // { path: '/page/7', name: 'gridblogpage7', component: gridblogpage7 },
    // { path: '/page/8', name: 'gridblogpage8', component: gridblogpage8 },
    // { path: '/page/9', name: 'gridblogpage9', component: gridblogpage9 },
    // { path: '/page/10', name: 'gridblogpage10', component: gridblogpage10 },





    //######################## BlogNews Detail ###########################
    { path: '/blogdetail1', name: 'blogdetail1', component: Blogdetail1 },
    { path: '/blogdetail2', name: 'blogdetail2', component: Blogdetail2 },
    { path: '/blogdetail3', name: 'blogdetail3', component: Blogdetail3 },
    { path: '/blogdetail4', name: 'blogdetail4', component: Blogdetail4 },
    { path: '/blogdetail5', name: 'blogdetail5', component: Blogdetail5 },
    { path: '/blogdetail6', name: 'blogdetail6', component: Blogdetail6 },
    { path: '/blogdetail7', name: 'blogdetail7', component: Blogdetail7 },
    { path: '/blogdetail8', name: 'blogdetail8', component: Blogdetail8 },
    { path: '/blogdetail9', name: 'blogdetail9', component: Blogdetail9 },
    { path: '/blogdetail10', name: 'blogdetail10', component: Blogdetail10 },
    { path: '/blogdetail11', name: 'blogdetail11', component: Blogdetail11 },
    { path: '/blogdetail12', name: 'blogdetail12', component: Blogdetail12 },
    { path: '/blogdetail13', name: 'blogdetail13', component: Blogdetail13 },
    { path: '/blogdetail14', name: 'blogdetail14', component: Blogdetail14 },
    { path: '/blogdetail15', name: 'blogdetail15', component: Blogdetail15 },
    { path: '/blogdetail16', name: 'blogdetail16', component: Blogdetail16 },
    { path: '/blogdetail17', name: 'blogdetail17', component: Blogdetail17 },
    { path: '/blogdetail18', name: 'blogdetail18', component: Blogdetail18 },
    { path: '/blogdetail19', name: 'blogdetail19', component: Blogdetail19 },
    { path: '/blogdetail20', name: 'blogdetail20', component: Blogdetail20 },
    { path: '/blogdetail21', name: 'blogdetail21', component: Blogdetail21 },
    { path: '/blogdetail22', name: 'blogdetail22', component: Blogdetail22 },
    { path: '/blogdetail23', name: 'blogdetail23', component: Blogdetail23 },
    { path: '/blogdetail24', name: 'blogdetail24', component: Blogdetail24 },
    { path: '/blogdetail25', name: 'blogdetail25', component: Blogdetail25 },
    { path: '/blogdetail26', name: 'blogdetail26', component: Blogdetail26 },
    { path: '/blogdetail27', name: 'blogdetail27', component: Blogdetail27 },
    { path: '/blogdetail28', name: 'blogdetail28', component: Blogdetail28 },

    //######################## BlogNews Detail From homepage ###########################
    { path: '/homepage/blogdetail1', name: 'bloghomepage1', component: blogdetail1 },
    { path: '/homepage/blogdetail2', name: 'bloghomepage2', component: blogdetail2 },
    { path: '/homepage/blogdetail3', name: 'bloghomepage3', component: blogdetail3 },
    { path: '/homepage/blogdetail4', name: 'bloghomepage4', component: blogdetail4 },
    { path: '/homepage/blogdetail5', name: 'bloghomepage5', component: blogdetail5 },
    { path: '/homepage/blogdetail6', name: 'bloghomepage6', component: blogdetail6 },



    //######################## BlogNews Detail From homepage ###########################
    { path: '/board_of_director/member1', name: 'board_of_director/member1', component: board_of_director1 },
    { path: '/board_of_director/member2', name: 'board_of_director/member2', component: board_of_director2 },
    { path: '/board_of_director/member3', name: 'board_of_director/member3', component: board_of_director3 },
    { path: '/board_of_director/member4', name: 'board_of_director/member4', component: board_of_director4 },


    //######################## Company Structure ###########################

    { path: '/companystructure/office', name: '/companystructure/office', component: Companystructure_office },
    { path: '/companystructure/finance', name: '/companystructure/finance', component: Companystructure_finance },
    { path: '/companystructure/it', name: '/companystructure/it', component: Companystructure_it },
    { path: '/companystructure/operation', name: '/companystructure/operation', component: Companystructure_operation },
    { path: '/companystructure/audit', name: '/companystructure/audit', component: Companystructure_audit },
    { path: '/companystructure/ceo-coo', name: '/companystructure/ceo-coo', component: Companystructure_ceo },

  ],





})

export default router