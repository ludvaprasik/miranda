<template>
  <div class="intro-page">
    <button @click="$router.push('/intro/welcome')" class="btn btn--intro">preskočiť návod <ArrowRight /></button>
    <div class="carousel-wrapper">
      <Carousel :slides="slides" :slidesPerPage="1" :autoplay="0" :arrows="false" />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Welcome to Miranda App',
  layout: "intro"
})

const slides = [
  {image: 'intro1.png', title: 'Nájdite svojho maznáčika priamo v našej aplikácii', message: 'Objavte svojho štvornohého kamaráta počas chvíľky'},
  {image: 'intro2.png', title: 'Nájdite svojho maznáčika priamo v našej aplikácii', message: 'Objavte svojho štvornohého kamaráta počas chvíľky'},
  {image: 'intro3.png', title: 'Nájdite svojho maznáčika priamo v našej aplikácii', message: 'Objavte svojho štvornohého kamaráta počas chvíľky'},
]
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
  //transform: translateY(1rem);
  margin: 0 2rem 0 auto;
  border-bottom: 2px solid #F9C45A;
  padding: 10px 16px;
}
</style>