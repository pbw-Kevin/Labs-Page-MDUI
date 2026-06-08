<script setup lang="ts">
import '~/assets/main.css'
import { init, labLoaded, labError } from '~/assets/main'
import Loading from '~/components/Loading.vue'
import RouteLoading from '~/components/RouteLoading.vue'
import TopAppBar from '~/components/TopAppBar.vue'
import NavigationDrawer from '~/components/NavigationDrawer.vue'
import BottomAppBar from '~/components/BottomAppBar.vue'

onMounted(init)
</script>

<template>
  <Loading :loaded="labLoaded" :error="labError"></Loading>
  <Transition name="fade">
    <div v-show="labLoaded">
      <mdui-layout>
        <TopAppBar></TopAppBar>
        <BottomAppBar></BottomAppBar>
        <NavigationDrawer></NavigationDrawer>
        <mdui-layout-main>
          <NuxtPage />
        </mdui-layout-main>
      </mdui-layout>
      <RouteLoading></RouteLoading>
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