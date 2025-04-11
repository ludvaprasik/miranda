<template>
  <div class="intro-page">
    <button @click="$router.push('/intro/welcome')" class="btn btn--intro">preskočiť návod <ArrowRight /></button>
    <div class="carousel-wrapper">
      <Carousel ref="carouselRef" :slides="slides" :slidesPerPage="1" :autoplay="0" :arrows="false" @pageChange="handlePageChange" />
    </div>
    <div class="carousel-nav">
      <button v-if="currentSlide !== 1" class="btn btn--action secondary mt-4 mb-1" @click="prevSlide">ZPĚT</button>
      <span class="silly-placeholder" v-else></span>
      <span class="divider"></span>
      <button class="btn btn--action mt-4 mb-1" @click="nextSlide">ďalej</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Welcome to Miranda App',
  layout: "intro"
})
const carouselRef = ref(null);
const slides = [
  {image: 'intro1.png', title: 'Nájdite svojho maznáčika priamo v našej aplikácii', message: 'Objavte svojho štvornohého kamaráta počas chvíľky'},
  {image: 'intro2.png', title: 'Nová videa ze zákulisí', message: 'Vaša pomoc prináša zvieratám šancu na lepší život'},
  {image: 'intro3.png', title: 'Virtuálna adopcia zvierat na pár kliknutí', message: 'Staňte sa súčasťou zmeny a zachráňte zvieracie životy'},
]
const currentSlide = ref(1)
const prevSlide = () => {
  if (carouselRef.value) {
    carouselRef.value.prevPage();
  }
}

const nextSlide = () => {
  if (carouselRef.value && carouselRef.value.totalPages !== currentSlide.value) {
    carouselRef.value.nextPage();
  } else {
    useRouter().push('/intro/welcome');
  }
}

const handlePageChange = (page: number) => {
  currentSlide.value = page
};
</script>

<style lang="scss" scoped>
.btn--intro {
  display: flex;
  gap: .5rem;
  align-items: center;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  color: $accent;
  margin: 0 2rem 0 auto;
  border-bottom: 2px solid #F9C45A;
  padding: 10px 16px;
}

.carousel-nav {
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  gap: 50px;
  padding: 0 2rem;
  button {
    margin: 0;
  }
}
</style>