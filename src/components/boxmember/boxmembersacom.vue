<template>

        <div class="membercontainer">
            <div class="logobox">
                <img :src="image" alt="Card">
            </div>
            <div ref="card" class="hover-card">
                <h1>ທະນາຄານ ໄຊງ່ອນເທືອງຕິ່ນ ລາວ </h1>
                <h2>Saigon Thuong Tin Commercial Joint Stock Bank</h2>
            

                <div class="icons" ref="icons">
                    <a v-if="link1" :href="link1" class="icon" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                    <a v-if="link2" :href="link2" class="icon" target="_blank" ><i class="fa-solid fa-globe"></i></a>
                </div>
            </div>
        </div>
 
</template>

<script setup>
import { ref, onMounted } from "vue"
import { gsap } from "gsap"

const props = defineProps({
    image: { type: String, required: true },
    link1: { type: String, default: "#" },
    link2: { type: String, default: "#" },
})

const card = ref(null)
const overlay = ref(null)
const icons = ref(null)

onMounted(() => {
    const tl = gsap.timeline({ paused: true })
    tl.to(overlay.value, { opacity: 0.1, duration: 0.4, ease: "power2.out" })
    tl.fromTo(
        icons.value,
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.2"
    )

    card.value.addEventListener("mouseenter", () => tl.play())
    card.value.addEventListener("mouseleave", () => tl.reverse())
})
</script>

<style scoped>
.logobox img{
    width: 100%;

    object-fit: cover;
    
}
.logobox{
    width: 300px;
    height: 300px;
    border-radius: 10px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 2
    ;
   
    border: 1px solid #1200b33c;
}


.membercontainer {
    margin-bottom: 15px;
    width: 910px;
    height: 300px;  
    align-items: center;
    
    display: flex;
   
}
.hover-card h1{
    font-size: 30px;    
    font-weight: bold;
    padding-bottom: 10px;
     font-family: "Noto Sans Lao", sans-serif;
    color: #fff;
}
.hover-card h2{
    font-size: 20px;
    color: #fff;
    font-weight: 600;
        font-family: "Inter";
}
.hover-card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
   
    position: relative;
    width: 90%;
    margin-left: 285px;

    height: 200px;
 
    overflow: hidden;

    background: linear-gradient(#18479e, #232299) 50% 50%/calc(100% - 15px) calc(100% - 15px) no-repeat,
        linear-gradient(321deg, transparent 0%, #b88a44 100%),
        linear-gradient(26deg, transparent 0%, #faf398 100%),
        linear-gradient(172deg, transparent 0%, #e0aa4e 100%),
        linear-gradient(270deg, transparent 0%, #f9f295 100%);
    cursor: pointer;
}

.card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
    background-color: red;
}

.hover-card:hover .card-img {
    transform: scale(1.05);
}


.icons {
    position: absolute;
    bottom: 15px;
    right: 15px;
    display: flex;
    gap: 10px;
}

.icon {
    width: 40px;
    height: 40px;
    background: white;
    border-radius: 8px;
    display: grid;
    place-items: center;
    color: #0f172a;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    transition: transform 0.2s ease;
}

.icon:hover {
    transform: translateY(-3px);
}
</style>
