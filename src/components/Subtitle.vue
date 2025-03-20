<template>
  <h3 class="font-semibold text-xl text-gray-200 !mb-4">{{ subtitle }}</h3>
</template>

<script setup lang="ts">
defineProps<{
  subtitle: string
}>()
</script>
