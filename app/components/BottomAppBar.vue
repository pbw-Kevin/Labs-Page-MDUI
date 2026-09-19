<script lang="ts" setup>
import config from '~/assets/config'
</script>

<template>
  <mdui-bottom-app-bar>
    <div v-html="config.bottom"></div>
  </mdui-bottom-app-bar>
</template>