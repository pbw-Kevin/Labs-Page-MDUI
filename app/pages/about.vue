<script lang="ts" setup>
import { config } from '~/assets/config'

useHead({
  title: '关于 - ' + config.title,
})
</script>

<template>
  <div class="content">
    <h1>关于</h1>
    <div v-html="config.about"></div>
  </div>
</template>