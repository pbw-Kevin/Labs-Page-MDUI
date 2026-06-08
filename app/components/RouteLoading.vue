<script setup lang="ts">
import { toggleNavBar, isUpMd } from '~/assets/main'

var guardBeforeEach: (() => void) | undefined = undefined
var guardAfterEach: (() => void) | undefined = undefined

onMounted(() => {
  var router = useRouter()

  guardBeforeEach = router.beforeEach(() => {
    document.querySelector('.route-loading-container')?.classList.add("active")
    document.querySelector('.content')?.classList.add("loading-disabled")
  })

  guardAfterEach = router.afterEach(() => {
    document.querySelector('.route-loading-container')?.classList.remove("active")
    document.querySelector('.content')?.classList.remove("loading-disabled")
  })
})

onUnmounted(() => {
  guardBeforeEach?.()
  guardAfterEach?.()
})
</script>

<template>
  <div class="route-loading-container" :style="{
    transform: toggleNavBar && isUpMd ? 'translateX(-50%) translateX(180px)' : 'translateX(-50%)'
  }">
    <mdui-circular-progress class="route-loading-icon"></mdui-circular-progress>
  </div>
</template>

<style scoped>
.route-loading-container {
  position: fixed;
  top: -80px;
  left: 50%;
  transition: top var(--mdui-motion-duration-long2) var(--mdui-motion-easing-standard);
  box-shadow: var(--mdui-elevation-level5);
  background-color: rgb(var(--mdui-color-background));
  width: 60px;
  height: 60px;
  border-radius: 30px;
  text-align: center;
  z-index: 2;
}

.route-loading-container.active {
  top: 80px;
}

.route-loading-icon {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>