<template>
  <div class="pet-profile">
    <img src="~/assets/img/dalsi-cert.png"  alt="certik" class="profile-pic"/>
    <h1>{{ route.params.id }}</h1>
    <p class="mb-4">
      Ahojte všetci, som Viliam (psík)🐶 ďalšie neodolateľné psíčatko, ktoré čaká na nový domov🏡Som originálny 2 ročný kríženec stredného vzrastu (24kg). Napriek tomu, že som ďalší čierny psík, ktorých väčšina ľudí prehliada a nemám za sebou najľahšiu minulosť, verím, že aj ja si nájdem rodinku, ktorá mi dá šancu. Číst dale
    </p>
    <button class="btn btn--action mb-2">
      Adoptovať
    </button>
    <button class="btn btn--action secondary mb-2">
      Virtuálna adopcia
    </button>
    <h2>O mne</h2>
    <ul class="info-tab">
      <li class="bg--acc-lighter">Popis</li>
      <li>
        Veľkosť:
        <span>
          <DogSize />
        </span>
      </li>
      <li>
        Vek:
        <span>Chlapec</span>
      </li>
      <li>
        Plemeno:
        <span>100% tuláčik</span>
      </li>
      <li>
        Farba:
        <span>Odtiene čiernej</span>
      </li>
      <li>
        Očkovaný:
        <span>Áno</span>
      </li>
      <li>
        Kastrácia:
        <span>Áno</span>
      </li>
      <li>
        Hendikep:
        <span>Nie</span>
      </li>
    </ul>

    <ul class="enjoys mb-2">
      <li><PawIconFilled /> Chcem s Vami behať po horách</li>
      <li><PawIconFilled /> Som parťák do každého počasia</li>
      <li><PawIconFilled />  Som trošku nezbedník</li>
      <li><PawIconFilled /> Musíte ma ešte niečo naučiť</li>
      <li><PawIconFilled /> Psích kamošov si vyberám</li>
      <li><PawIconFilled /> Potrebujem opäť získať dôveru</li>
    </ul>

    <div class="carousel-wrapper">
      <Carousel :slides="slides" :slidesPerPage="2" :autoplay="5000" :arrows="false" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import DogSize from "~/components/icons/dog-size.vue";

definePageMeta({
  layout: 'profile'
})

const route = useRoute()
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
</script>

<style lang="scss" scoped>
.pet-profile {
  padding: 1rem;
}
.profile-pic {
  border-radius: $border-radius-md;
  width: 100%;
}

ul {
  padding: 0;
  margin: 0 0 1rem 0;
  color: $accent;
  font-weight: 500;
}

.info-tab li {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  list-style-type: none;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  overflow: clip;
  &:nth-child(odd) {
    background: #F6F2F8;
  }
  &.bg--acc-lighter {
    background: $acc-lighter;
    color: #fff
  }
}

.enjoys li {
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 1rem;
  list-style-type: none;
  align-items: center;
  padding: 6px 10px;
  svg {
    width: 24px;
    height: 24px;
  }
}
</style>