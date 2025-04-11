<template>
  <div class="input__container">
    <input
        :type="isVisible ? 'text' : 'password'"
        v-model="password"/>
    <button type="button"
        class="btn showPass"
        @click="toggleVisibility">
      <EyeIcon />
    </button>
  </div>
</template>

<script lang="ts" setup>
import EyeIcon from "~/components/icons/eye-icon.vue";

const password: string = defineModel()
const isVisible = ref(false)

const toggleVisibility = () => {
  isVisible.value = !isVisible.value
}
</script>

<style lang="scss" scoped>
input, input:focus {
  border: none;
  outline: none;
}

.showPass {
  padding: 0 6px;
  display: flex;
  align-items: center;
}

.input__container {
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
  gap: 1rem;
  border-radius: $border-radius;
  border: 1px solid $input-border;
  &:focus-within {
    border-color: #000;
  }
}
</style>
