<template>
  <button
    @click="onClick"
    type="button"
    class="bg-blue/20 text-purple-2 text-xs font-semibold w-[60%] rounded-[0.35rem] hover:bg-main-purple/50 hover:text-white duration-200 cursor-pointer"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  onClick: () => void
  label: string
}>()
</script>
