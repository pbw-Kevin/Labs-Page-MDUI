<script setup lang="ts">
import 'mdui/components/top-app-bar'
import '@mdui/icons/menu'
import '@mdui/icons/light-mode'
import '@mdui/icons/light-mode--outlined'
import '@mdui/icons/dark-mode'
import '@mdui/icons/dark-mode--outlined'
import '@mdui/icons/incomplete-circle'

import { realTheme, themeSwitchHover, changeTheme, toggleNavBar, isSmallDevice } from '~/assets/main'
</script>

<template>
  <mdui-top-app-bar :variant="isSmallDevice ? 'medium' : 'small'">
    <mdui-button-icon @click="toggleNavBar = !toggleNavBar">
      <mdui-icon-menu></mdui-icon-menu>
    </mdui-button-icon>
    <mdui-top-app-bar-title>
      <NuxtLink to="/" style="color: rgb(var(--mdui-color-on-background)); text-decoration: none;">AIR-Kevin 的实验室</NuxtLink>
      <a style="margin-left: 8px; color: rgb(var(--mdui-color-on-background)); text-decoration: none; font-size: 16px;" href="//air-kevin.rf.gd/">返回主页</a>
      <a style="margin-left: 8px; color: rgb(var(--mdui-color-on-background)); text-decoration: none; font-size: 16px;" href="//blog.air-kevin.rf.gd">返回博客</a>
    </mdui-top-app-bar-title>
    <mdui-button-icon @click="changeTheme()" @mouseover="themeSwitchHover = true" @mouseleave="themeSwitchHover = false">
      <mdui-icon-light-mode--outlined v-if="realTheme == 'light' && !themeSwitchHover"></mdui-icon-light-mode--outlined>
      <mdui-icon-light-mode v-else-if="realTheme == 'light' && themeSwitchHover"></mdui-icon-light-mode>
      <mdui-icon-dark-mode--outlined v-else-if="realTheme == 'dark' && !themeSwitchHover"></mdui-icon-dark-mode--outlined>
      <mdui-icon-dark-mode v-else-if="realTheme == 'dark' && themeSwitchHover"></mdui-icon-dark-mode>
      <mdui-icon-incomplete-circle v-else></mdui-icon-incomplete-circle>
    </mdui-button-icon>
  </mdui-top-app-bar>
</template>

<style scoped>
mdui-top-app-bar {
  box-shadow: var(--mdui-elevation-level4);
  background-color: rgb(var(--mdui-color-primary-container));
}
</style>