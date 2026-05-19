<script setup lang="ts">
import '~/assets/main.css'
import { init, labLoaded, labError } from '~/assets/main'
import Loading from '~/components/Loading.vue'
import RouteLoading from '~/components/RouteLoading.vue'
import TopAppBar from '~/components/TopAppBar.vue'
import NavigationDrawer from '~/components/NavigationDrawer.vue'
import BottomAppBar from '~/components/BottomAppBar.vue'

onMounted(() => {
  var router = useRouter()

  router.beforeEach(() => {
    document.querySelector('.route-loading-container')?.classList.add("active")
    document.querySelector('.content')?.classList.add("loading-disabled")
  })

  router.afterEach(() => {
    document.querySelector('.route-loading-container')?.classList.remove("active")
    document.querySelector('.content')?.classList.remove("loading-disabled")
  })

  init()
})
</script>

<template>
  <Loading :loaded="labLoaded" :error="labError"></Loading>
  <Transition name="fade">
    <div v-if="labLoaded">
      <TopAppBar></TopAppBar>
      <NavigationDrawer></NavigationDrawer>
      <RouteLoading></RouteLoading>
      <NuxtPage />
      <BottomAppBar></BottomAppBar>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>