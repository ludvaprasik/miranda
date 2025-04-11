<template>
  <div class="dog-card" v-if="dog?.img">
    <img :src="'_nuxt/assets/img/' + dog.img" alt="doggo thumbnail" />
    <h4>
      {{ dog.name }}
      <DogsIcon />
    </h4>
    <div class="dog-info">
      <div class="dog-details">
        <strong>{{ dog.gender }}</strong>
        <strong>{{ dog.age }}</strong>
      </div>
      <button class="btn btn--more" @click="$router.push(`/dogs/${dog.name}`)">
        <MoreIcon />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  dog: {
    type: Object,
  }
})
</script>

<style lang="scss" scoped>
.dog-info {
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
}

img {
  width: 100%;
  border-radius: 12px;;
}

strong {
  display: block;
  font-weight: 500;
}
h4 {
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 0 0 8px 0;
}
</style>