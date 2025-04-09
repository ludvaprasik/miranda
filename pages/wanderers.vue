<template>
  <div class="wanderers">
    <h1>Nájsť nového člena rodiny</h1>
    <div class="tabs">
      <button class="btn btn-tab active">
        <PsikIcon />
        <span>Psík</span>
      </button>
      <button class="btn btn-tab">
        <MackaIcon />
        <span>Mačka</span>
      </button>
    </div>

    <button class="btn btn--action">Vyhľadávanie tuláčikov</button>

    <div class="dogo-list--full">
      <DogoCard v-for="dog in doggoList" :key="dog.name" :dog="dog" />
    </div>

  </div>
</template>

<script setup lang="ts">
import PsikIcon from "~/components/icons/psik-icon.vue";
import MackaIcon from "~/components/icons/macka-icon.vue";

const doggoList = [
  { img: 'certik-thumb.png', name: 'Daisy', age: 'Pubertak', gender: 'Dievča' },
  { img: 'vorisek-thumb.png', name: 'Rudy', age: 'Pubertak', gender: 'Chalan' },
  { img: 'certik-thumb.png', name: 'Daisy', age: 'Pubertak', gender: 'Dievča' },
  { img: 'vorisek-thumb.png', name: 'Rudy', age: 'Pubertak', gender: 'Chalan' },
  { img: 'certik-thumb.png', name: 'Daisy', age: 'Pubertak', gender: 'Dievča' },
  { img: 'vorisek-thumb.png', name: 'Rudy', age: 'Pubertak', gender: 'Chalan' },
  { img: 'certik-thumb.png', name: 'Daisy', age: 'Pubertak', gender: 'Dievča' },
  { img: 'vorisek-thumb.png', name: 'Rudy', age: 'Pubertak', gender: 'Chalan' },
  { img: 'certik-thumb.png', name: 'Daisy', age: 'Pubertak', gender: 'Dievča' },
  { img: 'vorisek-thumb.png', name: 'Rudy', age: 'Pubertak', gender: 'Chalan' },
  { img: 'certik-thumb.png', name: 'Daisy', age: 'Pubertak', gender: 'Dievča' },
  { img: 'vorisek-thumb.png', name: 'Rudy', age: 'Pubertak', gender: 'Chalan' }, { img: 'certik-thumb.png', name: 'Daisy', age: 'Pubertak', gender: 'Dievča' },
  { img: 'vorisek-thumb.png', name: 'Rudy', age: 'Pubertak', gender: 'Chalan' },
]
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}

.dogo-list--full {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 2rem 0 2rem 0;
}

.wanderers {
  padding: 0 1rem 100px 1rem;
}

.tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 1rem;
}
</style>