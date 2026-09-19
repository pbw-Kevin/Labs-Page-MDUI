<script lang="ts" setup>
import '@mdui/icons/light-mode'
import '@mdui/icons/light-mode--outlined'
import '@mdui/icons/dark-mode'
import '@mdui/icons/dark-mode--outlined'
import '@mdui/icons/incomplete-circle'

const themeSwitchHover = ref(false)
</script>

<template>
  <mdui-button-icon @click="$colorMode.preference = ($colorMode.value == 'light' ? 'dark' : 'light')"
    @mouseover="themeSwitchHover = true" @mouseleave="themeSwitchHover = false">
    <mdui-icon-light-mode--outlined
      v-if="$colorMode.value === 'light' && !themeSwitchHover"></mdui-icon-light-mode--outlined>
    <mdui-icon-light-mode v-else-if="$colorMode.value === 'light' && themeSwitchHover"></mdui-icon-light-mode>
    <mdui-icon-dark-mode--outlined
      v-else-if="$colorMode.value === 'dark' && !themeSwitchHover"></mdui-icon-dark-mode--outlined>
    <mdui-icon-dark-mode v-else-if="$colorMode.value === 'dark' && themeSwitchHover"></mdui-icon-dark-mode>
    <mdui-icon-incomplete-circle v-else></mdui-icon-incomplete-circle>
  </mdui-button-icon>
</template>