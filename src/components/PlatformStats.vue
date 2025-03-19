<template>
  <div class="flex gap-2">
    <img :src="iconUrl" :alt="alt" class="h-4" />
    <span class="font-normal text-sm">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  iconUrl: string
  label: string
  alt?: string
}>()
</script>
