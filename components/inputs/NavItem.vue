<script setup>
const props = defineProps({
  to: String,
  label: String,
  iconDefault: Object,
  iconActive: Object,
})

const isHovered = ref(false)
const route = useRoute()
const isActive = computed(() => route.path === props.to)

const currentIcon = computed(() => isHovered.value || isActive.value ? props.iconActive : props.iconDefault)
</script>

<template>
  <nuxt-link
      class="nav-link"
      :to="to"
      exact-active-class="active"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false" >
    <NavButton :class="{ active: isActive }">
      <component :is="currentIcon" />
      <span>{{ label }}</span>
    </NavButton>
  </nuxt-link>
</template>
