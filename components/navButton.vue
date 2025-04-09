<template>
  <button class="btn btn-nav">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn-nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 83px;
  gap: .5rem
}
</style>