<template>
  <span
    class="bg-green-light text-green-dark font-medium text-[0.7rem] rounded-sm px-8 py-1 mt-2 block w-min md:flex md:mt-0"
  >
    {{ isActive ? 'ATIVO' : 'INATIVO' }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  isActive: boolean
}>()
</script>
