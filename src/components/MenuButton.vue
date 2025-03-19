<template>
  <button
    :class="`text-gray-700 !px-4 !py-2 !mb-2 w-48 rounded-sm flex !gap-3 items-center duration-200 ${isActive ? 'bg-gray-300' : ''}`"
  >
    <img :src="iconUrl" :alt="`Ícone referente a ${title}`" class="text-gray-700 object-contain" />
    <span class="text-gray-700 font-semibold text-sm">{{ title }}</span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  isActive: boolean
  iconUrl: string
}>()
</script>
