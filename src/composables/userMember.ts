// src/composables/useMembers.ts
import { ref, computed, type Component } from 'vue'

// ✅ ใช้ตัวแปรนอกฟังก์ชัน = shared state ระหว่างทุกหน้า
export type ProductId =
  | 'atm_inquiry'
  | 'atm_withdraw'
  | 'mobile_transfer_to_atm'
  | 'atm_transfer'

export interface Member {
  id: string
  name: string
  component: Component
  image: string
  link1?: string
  link2?: string
  aosDuration: number
  products: ProductId[]
}

// ช่องค้นหา + ตัวเลือกบริการ
const searchTerm = ref('')
const selectedProducts = ref<ProductId[]>([])

const productOptions: { id: ProductId; label: string }[] = [
  { id: 'atm_inquiry', label: 'ກວດສອບຍອດເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM' },
  { id: 'atm_transfer', label: 'ໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM' },
  {
    id: 'mobile_transfer_to_atm',
    label: 'ໂອນເງິນຂ້າມທະນາຄານຜ່ານໂທລະສັບດ້ວຍເລກໜ້າບັດ',
  },
  { id: 'atm_withdraw', label: 'ຖອນເງິນສົດຂ້າມທະນາຄານຜ່ານຕູ້ ATM' },
]

// 👉 รวมสมาชิกทุกหน้ามาไว้ที่เดียว
import boxmemberbcel from '../components/boxmember/boxmemberbcel.vue'
import boxmemberldb from '../components/boxmember/boxmemberldb.vue'
import boxmemberapb from '../components/boxmember/boxmemberapb.vue'
import boxmemberjdb from '../components/boxmember/boxmemberjdb.vue'
import boxmembermaru from '../components/boxmember/boxmembermaru.vue'
import boxmemberlvb from '../components/boxmember/boxmemberlvb.vue'

import boxmembericbc from '../components/boxmember/boxmembericbc.vue'
import boxmemberboc from '../components/boxmember/boxmemberboc.vue'
import boxmembervtb from '../components/boxmember/boxmembervtb.vue'
import boxmemberib from '../components/boxmember/boxmemberib.vue'
import boxmemberaceleda from '../components/boxmember/boxmemberaceleda.vue'
import boxmemberbic from '../components/boxmember/boxmemberbic.vue'

import boxmembersacom from '../components/boxmember/boxmembersacom.vue'
import boxmemberstb from '../components/boxmember/boxmemberstb.vue'
import boxmemberkbank from '../components/boxmember/boxmemberkbank.vue'
import boxmemberpub from '../components/boxmember/boxmemberpub.vue'

const members = ref<Member[]>([
  // page1
  {
    id: 'bcel',
    name: 'ທະນາຄານ ການຄ້າຕ່າງປະເທດລາວ ມະຫາຊົນ Banque Pour Le Commerce Exterieur Lao Public (BCEL)',
    component: boxmemberbcel,
    image: '/Logomember/bcelretangle.png',
    link1: 'https://www.facebook.com/BCEL.Bank',
    link2: 'https://www.bcel.com.la',
    aosDuration: 500,
    products: ['atm_inquiry', 'atm_withdraw', 'mobile_transfer_to_atm', 'atm_transfer'],
  },
  {
    id: 'ldb',
    name: 'ທະນາຄານ ພັດທະນາລາວ ຈຳກັດ Lao Development Bank (LDB)',
    component: boxmemberldb,
    image: '/Logomember/ldb-gold.png',
    link1: 'https://www.facebook.com/ldblao',
    link2: 'https://www.ldblao.la/',
    aosDuration: 600,
    products: ['atm_inquiry', 'atm_withdraw', 'atm_transfer', 'mobile_transfer_to_atm'],
  },
  {
    id: 'apb',
    name: 'ທະນາຄານ ສົ່ງເສີມກະສິກໍາ ຈຳກັດ Agricultural Promotion Bank (APB)',
    component: boxmemberapb,
    image: '/Logomember/APBB.PNG',
    link1: 'https://www.facebook.com/APB.Bank/?locale=th_TH',
    link2: 'https://www.apb.com.la',
    aosDuration: 700,
    products: ['atm_inquiry', 'atm_withdraw', 'atm_transfer'],
  },
  {
    id: 'jdb',
    name: 'ທະນາຄານ ຮ່ວມພັດທະນາ Joint Development Bank (JDB)',
    component: boxmemberjdb,
    image: '/Logomember/JDBbank.png',
    link1: 'https://www.facebook.com/jdbbanklaos',
    link2: 'https://www.jdbbank.com.la/',
    aosDuration: 800,
    products: ['atm_inquiry', 'atm_withdraw', 'atm_transfer'],
  },
  {
    id: 'maru',
    name: 'ທະນາຄານ ມາຣູຮານ ເຈແປນ ລາວ ຈຳກັດ MARUHAN Japan Bank Lao (MJBL)',
    component: boxmembermaru,
    image: '/Logomember/MARU.jpg',
    link1: 'https://www.facebook.com/MaruhanJapanBankLao/',
    link2: 'https://maruhanjapanbanklao.com',
    aosDuration: 900,
    products: ['atm_inquiry', 'atm_withdraw', 'atm_transfer'],
  },
  {
    id: 'lvb',
    name: 'ທະນາຄານ ຮ່ວມທຸລະກິດ ລາວ-ຫວຽດ Laos - Vietnam Joint Venture Bank (LVB)',
    component: boxmemberlvb,
    image: '/Logomember/LVB.png',
    link1: 'https://www.facebook.com/LaoVietBank',
    link2: 'https://www.laovietbank.com.la/la/',
    aosDuration: 1100,
    products: ['atm_inquiry', 'atm_withdraw', 'atm_transfer'],
  },

  // page2
  {
    id: 'icbc',
    name: 'ທະນາຄານ ອຸດສະຫະກໍາ ແລະ ການຄ້າຈີນ ຈຳກັດ Industrial and Commercial Bank of China Limited (ICBC)',
    component: boxmembericbc,
    image: '/Logomember/ICBC.png',
    link1: 'https://www.facebook.com/icbcglobal/',
    link2: 'https://vientiane.icbc.com.cn/en/column/1438058341816746015.html',
    aosDuration: 200,
    products: ['atm_inquiry', 'atm_withdraw', 'atm_transfer'],
  },
  {
    id: 'boc',
    name: 'ທະນາຄານແຫ່ງ ປະເທດຈີນ ຈຳກັດ Bank of China (BOC)',
    component: boxmemberboc,
    image: '/Logomember/bboc.png',
    link1: 'https://www.facebook.com/profile.php?id=100066833677650',
    link2: 'https://www.boc.cn/en/',
    aosDuration: 400,
    products: ['atm_inquiry', 'atm_withdraw'],
  },
  {
    id: 'vtb',
    name: 'ທະນາຄານ ຫວຽດຕິນ ລາວ ຈຳກັດ VietinBank LAO (VTB)',
    component: boxmembervtb,
    image: '/Logomember/vtb.png',
    link1: 'https://www.facebook.com/vtblao',
    link2: 'https://laoefast.vietinbank.com.la',
    aosDuration: 500,
    products: ['atm_inquiry', 'atm_withdraw'],
  },
  {
    id: 'ib',
    name: 'ທະນາຄານ ອິນໂດຈີນ ຈຳກັດ Indochina Bank (IB)',
    component: boxmemberib,
    image: '/Logomember/IBbankk.JPG',
    link1: 'https://www.facebook.com/indochina.bank.page',
    link2: 'https://iblaos.com',
    aosDuration: 700,
    products: ['atm_inquiry', 'atm_withdraw', 'atm_transfer'],
  },
  {
    id: 'acleda',
    name: 'ທະນາຄານ ເອຊີລີດາລາວ ຈໍາກັດ ACLEDA BANK LAO (ACLEDA)',
    component: boxmemberaceleda,
    image: '/Logomember/ACL-bg.png',
    link1: 'https://www.facebook.com/acledabanklao',
    link2: 'https://www.acledabank.com.la/la/lao/',
    aosDuration: 900,
    products: ['atm_inquiry', 'atm_withdraw', 'atm_transfer'],
  },
  {
    id: 'bic',
    name: 'ທະນາຄານ ບີໄອຊີ ລາວ ຈໍາກັດ BIC Bank Lao (BIC)',
    component: boxmemberbic,
    image: '/Logomember/BIC.png',
    link1: 'https://www.facebook.com/BICBANKLAO',
    link2: 'https://www.biclaos.com',
    aosDuration: 1100,
    products: ['atm_inquiry', 'atm_withdraw', 'atm_transfer'],
  },

  // page3
  {
    id: 'sacom',
    name: 'ທະນາຄານ ໄຊງ່ອນເທືອງຕິ່ນ ລາວ Saigon Thuong Tin Commercial Joint Stock Bank (SACOM)',
    component: boxmembersacom,
    image: '/Logomember/sacom.png',
    link1: 'https://www.facebook.com/SacombankLao',
    link2: 'https://www.sacombank.com.la',
    aosDuration: 600,
    products: ['atm_inquiry', 'atm_withdraw', 'atm_transfer'],
  },
  {
    id: 'stb',
    name: 'ທະນາຄານ ເອັສທີ ຈຳກັດ ST Bank Limited (STB)',
    component: boxmemberstb,
    image: '/Logomember/STB.jpg',
    link1: 'https://www.facebook.com/STBankLaos',
    link2: 'https://www.stbanklaos.la',
    aosDuration: 800,
    products: ['atm_inquiry', 'atm_withdraw', 'atm_transfer'],
  },
  {
    id: 'kbank',
    name: 'ທະນາຄານ ກະສິກອນໄທ ຈຳກັດ KASIKORNBANK Public Company Limited (KBANK)',
    component: boxmemberkbank,
    image: '/Logomember/kbank.jpg',
    link1: 'https://www.facebook.com/KBankLaos/',
    link2: 'https://www.kasikornbank.com.la',
    aosDuration: 900,
    products: ['atm_inquiry', 'atm_withdraw', 'atm_transfer'],
  },
  {
    id: 'pub',
    name: 'ທະນາຄານ ພາບລິກ PUBLIC Bank (PUB)',
    component: boxmemberpub,
    image: '/Logomember/public-bank.svg',
    link1: 'https://www.facebook.com/p/Public-Bank-Lao-61566020099587/',
    link2: 'https://www.publicbank.com.la',
    aosDuration: 1000,
    products: ['atm_inquiry', 'atm_withdraw', 'atm_transfer'],
  },
])

const allProductIds = productOptions.map((p) => p.id)

const isAllSelected = computed(
  () =>
    selectedProducts.value.length === allProductIds.length &&
    allProductIds.every((id) => selectedProducts.value.includes(id)),
)

const toggleProduct = (id: ProductId) => {
  const index = selectedProducts.value.indexOf(id)
  if (index === -1) {
    selectedProducts.value.push(id)
  } else {
    selectedProducts.value.splice(index, 1)
  }
}

const isProductSelected = (id: ProductId) =>
  selectedProducts.value.includes(id)

const toggleAll = () => {
  if (isAllSelected.value) {
    selectedProducts.value = []
  } else {
    selectedProducts.value = [...allProductIds]
  }
}

const filteredMembers = computed(() => {
  const keyword = searchTerm.value.trim().toLowerCase()
  let list = members.value

  if (keyword) {
    list = list.filter((m) => m.name.toLowerCase().includes(keyword))
  }

  const shouldFilterByProduct =
    selectedProducts.value.length > 0 && !isAllSelected.value

  if (shouldFilterByProduct) {
    list = list.filter((m) =>
      selectedProducts.value.every((p) => m.products.includes(p)),
    )
  }

  return list
})

export function useMembers() {
  return {
    // state
    searchTerm,
    productOptions,
    selectedProducts,
    // actions
    toggleProduct,
    isProductSelected,
    isAllSelected,
    toggleAll,
    // data
    filteredMembers,
  }
}
