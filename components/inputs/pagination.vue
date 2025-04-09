<template>
  <div class="pagination" v-if="totalPages > 1">
    <button class="btn btn-page" :disabled="modelValue === 1" @click="$emit('update:modelValue', modelValue - 1)">
      <ArrowLeft />
    </button>
    <span>{{ modelValue }} z {{ totalPages }}</span>
    <button class="btn btn-page" :disabled="modelValue === totalPages" @click="$emit('update:modelValue', modelValue + 1)">
      <ArrowRight />
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: number
  totalPages: number
}>()

defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
.pagination {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  align-items: center;
}

.btn-page {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid red;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
</style>
