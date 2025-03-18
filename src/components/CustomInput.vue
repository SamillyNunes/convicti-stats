<template>
  <div class="pb-2">
    <input
      :placeholder="placeholder"
      :type="type"
      class="bg-white border border-gray-medium rounded-[6px] w-full h-10 !px-4"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  type?: 'text' | 'password' | 'email'
  placeholder?: string
}>()
</script>
