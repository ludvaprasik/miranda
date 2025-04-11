<template>
  <button type="button"
      class="checkbox btn"
      @click="model = !model">

    <CheckIcon v-if="model" />
    <div
        v-else
        class="not-checked"
    />
  </button>
</template>

<script lang="ts" setup>
const model = defineModel<Boolean>()
</script>

<style lang="scss" scoped>
.not-checked {
  width: 23px;
  height: 23px;
  border: 2px solid $accent;
  border-radius: 6px;
}
</style>
