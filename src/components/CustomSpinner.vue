<template>
  <div class="w-full h-[60%] flex items-center justify-center">
    <div
      :class="`w-5 h-5 border-2  border-t-transparent rounded-full animate-spin ${isPurple ? 'border-main-purple' : 'border-white'}`"
    ></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isPurple?: boolean
}>()
</script>
