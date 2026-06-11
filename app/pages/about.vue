<script lang="ts" setup>
import config from '~/assets/config'

useHead({
  title: `关于${config.titleDelimiter}${config.title}`
})
</script>

<template>
  <h1>关于</h1>
  <div v-html="config.about"></div>
</template>