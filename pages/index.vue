<template>
  <div>
    <h1>
      Demo Day Aplikace
      <PawsIcon />
    </h1>

    <div class="section">
      <h2>Nové videa</h2>
    </div>
  </div>
</template>
<script setup lang="ts">
import PawsIcon from "~/components/icons/paws-icon.vue";
</script>

<style lang="scss" scoped>
h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
}
</style>