<template>
  <div class="welcome-page">
    <button @click="$router.push('/intro/intro')" class="btn btn--intro"><ArrowLeft /></button>
    <img src="../../public/img/intro4.png" alt="qr"/>
    <div class="cta">
      <button class="btn btn--action mt-4 mb-2" @click="$router.push('/intro/login')">Prihlásiť SE</button>
      <button class="btn btn--action secondary mb-4" @click="$router.push('/intro/register')">Registrovať sa</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Welcome to Miranda App',
  layout: "intro"
})
</script>

<style lang="scss" scoped>
img {
  height: auto;
  width: 100%;
}

.cta {
  padding: 0 2rem;
  margin-top: 6rem;
}

.btn--intro {
  margin: 0 0 0 2rem;
  transform: translateY(1rem);
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid #F9C45A
}
</style>