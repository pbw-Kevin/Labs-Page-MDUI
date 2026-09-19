<script lang="ts" setup>
import ThemeButton from './ThemeButton.vue'
import config from '~/assets/config'
import { toggleNavBar, isSmallDevice } from '~/assets/main'

import '@mdui/icons/menu'
</script>

<template>
  <mdui-top-app-bar :variant="isSmallDevice ? 'medium' : 'small'">
    <mdui-button-icon @click="toggleNavBar = !toggleNavBar">
      <mdui-icon-menu></mdui-icon-menu>
    </mdui-button-icon>
    <mdui-top-app-bar-title>
      <NuxtLink to="/" class="title">{{ config.title }}</NuxtLink>
      <a
        class="title small-title"
        :href="item.href"
        v-for="(item, index) in config.subtitles" :key="index"
      >{{ item.text }}</a>
    </mdui-top-app-bar-title>
    <ClientOnly>
      <ThemeButton></ThemeButton>
    </ClientOnly>
  </mdui-top-app-bar>
</template>

<style scoped>
mdui-top-app-bar {
  box-shadow: var(--mdui-elevation-level4);
  background-color: rgb(var(--mdui-color-primary-container));
}

.small-title {
  margin-left: 8px;
  font-size: 16px;
}
</style>