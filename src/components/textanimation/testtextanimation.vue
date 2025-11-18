<template>
<div class="modern-wrapper">
    <span ref="textRef" class="modern-text">
        {{ text }}
    </span>
</div>
</template>

<script>
import {
    ref,
    onMounted
} from "vue";
import gsap from "gsap";

const props = defineProps({
    text: String
});

const textRef = ref(null);

onMounted(() => {
    const el = textRef.value;

    // Create GSAP timeline
    const tl = gsap.timeline({
        repeat: -1, // infinite loop
        repeatDelay: 1
    });

    // Enter animation
    tl.fromTo(
            el, {
                y: "100%",
                opacity: 0,
                scale: 1.1
            }, {
                y: "0%",
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "power4.out"
            }
        )
        // stay visible 1 second
        .to(el, {
            opacity: 1,
            duration: 1
        })
        // exit animation
        .to(el, {
            y: "-100%",
            opacity: 0,
            duration: 0.8,
            ease: "power2.in"
        });
});
</script>

<style scoped>
.modern-wrapper {
    overflow: hidden;
    display: inline-block;
}

.modern-text {
    display: inline-block;
    font-size: 64px;
    font-weight: 800;
    letter-spacing: -0.5px;
    color: #111;
    font-family: "Inter", sans-serif;
}
</style>
