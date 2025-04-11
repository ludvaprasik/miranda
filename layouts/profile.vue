<template>
  <Header />
  <button @click="goToPrev()" class="btn btn-back">
    <ArrowLeftIcon />
    <strong>Späť</strong>
  </button>
  <slot />
</template>

<script lang="ts" setup>
import {useRouter} from "#app";
import ArrowLeftIcon from "~/components/icons/arrow-left-icon.vue";

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