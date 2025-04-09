<script lang="ts" setup>

</script>

<template>
  <Carousel>
    <Slide :key="1">
      <img src="~/assets/img/dogo1.png" alt="Dogo 1" />
    </Slide>
    <Slide :key="2">
      <img src="~/assets/img/dogo2.png" alt="Dogo 2" />
    </Slide>
    <Slide :key="3">
      <img src="~/assets/img/dogo1.png" alt="Dogo 3" />
    </Slide>
    <Slide :key="4">
      <img src="~/assets/img/dogo2.png" alt="Dogo 4" />
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>