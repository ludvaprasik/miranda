<template>
  <slot />
  <div class="menu-footer">
    <div class="menu-footer__contact">
      <h3>
        <HouseIcon />
        Chcete nás navštívit?
      </h3>
    </div>
    <NavButton @click="goToPrev()" class="menu-footer__button">
      <CloseIcon />
      <span>Zavřít</span>
    </NavButton>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const goToPrev = () => {
  router.go(-1);
}
</script>

<style lang="scss" scoped>
.menu-footer {
  position: fixed;
  inset: 0;
  top: unset;
  padding: 0 0 0 1rem;
}

h2 {
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 1rem;
}

.menu-footer__button {
  width: 100px;
  float: right;
}
</style>