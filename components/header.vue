<template>
  <header :style="headerStyle">
    <MirandaLogo />
    <div class="fake-input">
      <EditIcon />
      Kontaktujte nás
    </div>
    <AvatarIcon @click="$router.push('/user-profile')" style="cursor: pointer;" />
  </header>
</template>

<script setup lang="ts">
const props = defineProps({
  bg: {
    type: Boolean,
    default: true
  }
})

// hodne nesikovne, ale rychlejsi provedeni, nez automagicky pres styly kontejneru
const headerStyle = computed(() => {
  if (props.bg) {
    return { background: '#fff' }
  } else {
    console.log('eeedd')
    return { background: '#EEE4F2' }
  }
})
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
  z-index: 10;
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