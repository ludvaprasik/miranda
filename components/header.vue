<template>
  <header>
    <MirandaLogo />
    <div class="fake-input">
      <EditIcon />
      Kontaktujte nás
    </div>
    <AvatarIcon />
  </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
header {
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  padding: 12px 20px;
  gap: 1rem;
  position: sticky;
  top: 0;
  align-content: center;
  background: #fff;
}

.fake-input {
  background: $bg-dark;
  border-radius: 6px;
  display: flex;
  align-items: center;
  min-height: 32px;
  gap: .5rem;
  padding: 0 .5rem;
}
</style>