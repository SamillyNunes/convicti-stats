<template>
  <span
    class="block md:inline bg-main-purple/20 text-black text-[0.7rem] rounded-2xl px-3 py-1 mr-1 mt-2 md:mt-0"
    >{{ label }}</span
  >
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>
