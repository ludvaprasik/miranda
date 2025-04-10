<template>
  <div class="home">
    <h1>
      Demo Day Aplikace
      <PawsIcon />
    </h1>

    <div class="section section-bg">
      <h2>Nové videa</h2>

      <div class="carousel-wrapper">
        <Carousel :slides="slides" :slidesPerPage="2" :autoplay="5000" :arrows="false" />
      </div>

      <button class="btn btn--action">Viac videí</button>
    </div>

    <div class="section">
      <h2>Naši tuláčiky</h2>

      <div class="dogos__list">
        <DogoCard v-for="dog in doggoList" :key="dog.name" :dog="dog" />
      </div>

      <button class="btn btn--action">Viac tuláčikov</button>
    </div>

  </div>
</template>

<script setup lang="ts">
const slides = ref([
  { image: 'dogo1.png' },
  { image: 'dogo2.png' },
  { image: 'dogo3.png' },
  { image: 'dogo4.png' },
  { image: 'dogo1.png' },
  { image: 'dogo2.png' },
  { image: 'dogo3.png' },
  { image: 'dogo4.png' }
]);
const doggoList = [
  { img: 'certik-thumb.png', name: 'Daisy', age: 'Pubertak', gender: 'Dievča' },
  { img: 'vorisek-thumb.png', name: 'Rudy', age: 'Pubertak', gender: 'Chalan' },
]
</script>

<style lang="scss" scoped>
h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
}

.home {
  padding-bottom: 100px;
}

.dogos__list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}
</style>