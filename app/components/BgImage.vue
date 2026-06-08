<script lang="ts" setup>
import config from '~/assets/config'
</script>

<template>
  <div class="bg-img-container" :style="{ opacity: config.bgImage.opacity }">
    <img
      class="bg-img-mobile bg-img"
      draggable="false"
      :src="config.bgImage.mobile"
      v-if="config.bgImage.mobile"
    />
    <img
      class="bg-img-pc bg-img"
      draggable="false"
      :src="config.bgImage.pc"
      v-if="config.bgImage.pc"
    />
  </div>
</template>

<style scoped>
.bg-img-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}

.bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
}

@media (min-aspect-ratio: 6/7) {
  .bg-img-mobile {
    display: none;
  }
}

@media (max-aspect-ratio: 6/7) {
  .bg-img-pc {
    display: none;
  }
}
</style>