<template>
  <div class="pb-2">
    <input
      :placeholder="placeholder"
      :type="type"
      class="bg-white border border-gray-400 rounded-[6px] w-full h-10 !px-4"
      v-model="value"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, onBeforeMount, ref, watchEffect } from 'vue'

const value = ref('')

const props = defineProps<{
  type?: 'text' | 'password' | 'email'
  placeholder?: string
  inputValue?: string
  onChange: (value: string) => void
}>()

onBeforeMount(() => {
  if (props.inputValue) {
    value.value = props.inputValue
  }
})

watchEffect(() => {
  props.onChange(value.value)
})
</script>
