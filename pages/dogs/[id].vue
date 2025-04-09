<template>
  {{ route.params.id }}
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'profile'
})

const route = useRoute()
</script>