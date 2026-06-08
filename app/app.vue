<script setup lang="ts">
import '~/assets/main.css'
import config from '~/assets/config'
import { init, labLoaded, labError } from '~/assets/main'
import Loading from '~/components/Loading.vue'
import RouteLoading from '~/components/RouteLoading.vue'
import TopAppBar from '~/components/TopAppBar.vue'
import NavigationDrawer from '~/components/NavigationDrawer.vue'
import BottomAppBar from '~/components/BottomAppBar.vue'
import BgImage from '~/components/BgImage.vue'

onMounted(init)
</script>

<template>
  <Loading :loaded="labLoaded" :error="labError"></Loading>
  <Transition name="fade">
    <div v-show="labLoaded">
      <mdui-layout>
        <TopAppBar :style="{ opacity: config.bgImage.frontOpacity }"></TopAppBar>
        <BottomAppBar :style="{ opacity: config.bgImage.frontOpacity }"></BottomAppBar>
        <NavigationDrawer :style="{ opacity: config.bgImage.frontOpacity }"></NavigationDrawer>
        <mdui-layout-main :style="{ opacity: config.bgImage.frontOpacity }">
          <NuxtPage />
        </mdui-layout-main>
      </mdui-layout>
      <RouteLoading></RouteLoading>
      <BgImage></BgImage>
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