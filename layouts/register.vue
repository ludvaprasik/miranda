<template>
  <Header :bg="false"/>
  <div class="register__container">
    <slot />
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.register__container {
  background: $bg-carousel;
  min-height: calc(100% - 56px);
  display: grid;
  grid-template-rows: 1fr auto;
}
</style>