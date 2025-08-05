<script setup lang="ts">
import '~/assets/main.css'
import { init } from '~/assets/main'
import TopAppBar from '~/components/TopAppBar.vue'
import NavigationDrawer from '~/components/NavigationDrawer.vue'
import BottomAppBar from '~/components/BottomAppBar.vue'

onMounted(() => init())
</script>

<template>
  <div>
    <TopAppBar></TopAppBar>
    <NavigationDrawer></NavigationDrawer>
    <NuxtPage />
    <BottomAppBar></BottomAppBar>
  </div>
</template>
