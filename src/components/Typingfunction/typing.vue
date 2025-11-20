<template>
  <div class="typing-container">
    <h2 ref="textRef" class="typing-text"></h2>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const textRef = ref(null)

function gsapTypingNewLine(element, texts, speed = 0.001, delay = 0.1) {
  const tl = gsap.timeline({ repeat: 0, repeatDelay: delay })
  
  texts.forEach(text => {
    const chars = text.split('')
    tl.call(() => {
      // 👇 เพิ่มบรรทัดใหม่ก่อนเริ่มพิมพ์ข้อความใหม่
      if (element.innerHTML !== '') element.innerHTML += '<br>'
    })
    chars.forEach((char, i) => {
      tl.to({}, {
        duration: speed,
        onComplete: () => element.innerHTML += char
      })
    })
  })
}

onMounted(() => {
  gsapTypingNewLine(textRef.value, [
    "1. ກວດຍອດເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM",
    "2. ຖອນເງິນສົດຂ້າມທະນາຄານຜ່ານຕູ້ ATM",
    "3. ໂອນເງິນຂ້າມທະນາຄານຜ່ານຕູ້ ATM ໃນຮູບ ແບບການໂອນ ບັດ ຫາ ເລກໜ້າບັດ",
    "4. ໂອນເງິນຂ້າມທະນາຄານເທິງມືຖື ໃນຮູບແບບໂອນຈາກບັນຊີ - ບັນຊີ",
    "5. ຊຳລະຂ້າມທະນາຄານ ຜ່ານ LAPNet QR Pay",
    "6. ຊຳລະຂ້າມແດນຜ່ານ QR",
  ], 0.04, 1)
})
</script>

<style scoped>
.typing-container {
  font-family: "Noto Sans Lao", sans-serif;
  font-size: 23px;
  line-height: 2.0;
  color: #ffffff;
  white-space: pre-line;
 
  animation: blink 0.6s step-end infinite;
}

@keyframes blink {
  50% { border-color: transparent; }
}
</style>