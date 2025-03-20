<template>
  <div
    :class="`w-5 h-5 border-2  border-t-transparent rounded-full animate-spin ${isPurple ? 'border-main-purple' : 'border-white'}`"
  ></div>
</template>

<script setup lang="ts">
defineProps<{
  isPurple?: boolean
}>()
</script>
