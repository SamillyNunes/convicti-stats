<template>
  <span class="bg-main-purple/20 text-black text-[0.7rem] rounded-2xl px-4 py-1 mr-1">{{
    label
  }}</span>
</template>

<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>
