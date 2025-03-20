<template>
  <h1 class="font-bold text-3xl">{{ title }}</h1>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
