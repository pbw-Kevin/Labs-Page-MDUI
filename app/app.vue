<script setup lang="ts">
import '~/assets/main.css'
import { init, labLoaded, labError } from '~/assets/main'
import TopAppBar from '~/components/TopAppBar.vue'
import NavigationDrawer from '~/components/NavigationDrawer.vue'
import BottomAppBar from '~/components/BottomAppBar.vue'

onMounted(init)
</script>

<template>
  <div v-if="!labLoaded && !labError" class="loading">
    <div class="loading-icon"></div>
    <p>正在加载相关资源，再等等……</p>
  </div>
  <div v-if="labError" class="loading">
    <svg class="error" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 52 52">
      <circle class="circle" cx="26" cy="26" r="25" fill="none" />
      <path class="line" fill="none" d="M17.36,34.736l17.368-17.472" />
      <path class="line" fill="none" d="M34.78,34.684L17.309,17.316" />
    </svg>
    <p>加载资源失败。请刷新重试。</p>
  </div>
  <div v-if="labLoaded">
    <TopAppBar></TopAppBar>
    <NavigationDrawer></NavigationDrawer>
    <NuxtPage />
    <BottomAppBar></BottomAppBar>
  </div>
</template>

<style scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 16px);
}

.loading-icon {
  width: 30px;
  height: 30px;
  margin: 0 10px;
  border: 2px solid #000;
  border-top-color: transparent;
  border-radius: 100%;
  animation: loading-icon infinite 0.75s linear;
}
@keyframes loading-icon {
  0%  {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.error {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: #fff;
    stroke-miterlimit: 10;
    margin: 20px;
    box-shadow: inset 0px 0px 0px #e74c3c;
    animation: fill-red 0.5s ease-in-out 0.5s forwards, scale 0.3s ease-in-out 0.7s both;
}
.error .circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: #e74c3c;
    fill: none;
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}
.error .line {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.7s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
}
.error .line:nth-child(1) {
    animation-delay: 1s;
}
.error .line:nth-child(2) {
    /* Animate */
     
    animation-delay: 0.7s;
}
@keyframes stroke {
    100% {
        stroke-dashoffset: 0;
    }
}
@keyframes scale {
    0%, 100% {
        transform: none;
    }
    50% {
        transform: scale3d(1.2, 1.2, 1);
    }
    80% {
        transform: scale3d(0.8, 0.8, 1);
    }
}
@keyframes fill-green {
    100% {
        box-shadow: inset 0px 0px 0px 25px #7ac142;
    }
}
@keyframes fill-red {
    100% {
        box-shadow: inset 0px 0px 0px 25px #e74c3c;
    }
}
</style>