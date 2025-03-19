<template>
  <div class="pb-2">
    <input
      :placeholder="placeholder"
      :type="type"
      class="bg-white border border-gray-medium rounded-[6px] w-full h-10 !px-4"
      v-model="value"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watchEffect } from 'vue'

const value = ref('')

const props = defineProps<{
  type?: 'text' | 'password' | 'email'
  placeholder?: string
  onChange: (value: string) => void
}>()

watchEffect(() => {
  props.onChange(value.value)
})
</script>
