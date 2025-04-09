<template>
  <div class="welcome__container">
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.welcome__container {
  background: #EEE4F2;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
}
</style>