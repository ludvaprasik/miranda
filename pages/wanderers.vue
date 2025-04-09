<template>
  <div class="wanderers">
    <h1>Nájsť nového člena rodiny</h1>

    <div class="tabs">
      <button class="btn btn-tab" :class="{ active: selectedTab === 'dogs'}" @click="selectedTab = 'dogs'">
        <PsikIcon />
        <span>Psík</span>
      </button>
      <button class="btn btn-tab" :class="{ active: selectedTab === 'cats'}" @click="selectedTab = 'cats'">
        <MackaIcon />
        <span>Mačka</span>
      </button>
    </div>

    <button class="btn btn--action">Vyhľadávanie tuláčikov</button>

    <div class="dogo-list--full" v-if="selectedTab === 'dogs'">
      <DogoCard v-for="dog in paginatedDogs" :key="dog.name" :dog="dog" />
      <Pagination v-model="currentPage" :total-pages="totalPages" />
    </div>

    <div class="dogo-list--full" v-if="selectedTab === 'cats'">
      macky
    </div>

  </div>
</template>

<script setup lang="ts">
import ArrowRight from "~/components/icons/arrow-right.vue";

const selectedTab = ref('dogs')
const currentPage = ref(1)
const pageSize = 12
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
  { img: 'vorisek-thumb.png', name: 'Rudy', age: 'Pubertak', gender: 'Chalan' },
  { img: 'certik-thumb.png', name: 'Daisy', age: 'Pubertak', gender: 'Dievča' },
  { img: 'vorisek-thumb.png', name: 'Rudy', age: 'Pubertak', gender: 'Chalan' },
  { img: 'certik-thumb.png', name: 'Daisy', age: 'Pubertak', gender: 'Dievča' },
  { img: 'vorisek-thumb.png', name: 'Rudy', age: 'Pubertak', gender: 'Chalan' },
  { img: 'certik-thumb.png', name: 'Daisy', age: 'Pubertak', gender: 'Dievča' },
  { img: 'vorisek-thumb.png', name: 'Rudy', age: 'Pubertak', gender: 'Chalan' },
  { img: 'certik-thumb.png', name: 'Daisy', age: 'Pubertak', gender: 'Dievča' },

]

const totalPages = computed(() => Math.ceil(doggoList.length / pageSize))
const paginatedDogs = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  return doggoList.slice(start, start + pageSize)
})
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}

.dogo-list--full {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(calc(50% - .5rem), 200px), 1fr));
  gap: 1rem;
  margin: 2rem 0 2rem 0;
}

.wanderers {
  padding: 0 1rem 80px 1rem;
}

.tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 1rem;
  justify-content: stretch;
  .btn-tab {
    display: flex;
    width: 100%;
  }
}
</style>