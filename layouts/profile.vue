<template>
  <Header />
  <button @click="goToPrev()">
    <ArrowLeftIcon />
    <strong>Zavřít</strong>
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