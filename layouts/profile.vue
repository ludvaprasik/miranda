<template>
  <Header />
  <button @click="goToPrev()" class="btn btn-back">
    <ArrowLeftIcon />
    <strong>Späť</strong>
  </button>
  <slot />
</template>

<script lang="ts" setup>
const router = useRouter()
const goToPrev = () => {
  router.go(-1);
}
</script>

<style lang="scss" scoped>
.btn-back {
  margin: 0 0 1rem 1rem;
  display: flex;
  align-items: center;
  gap: .5rem;
}
</style>