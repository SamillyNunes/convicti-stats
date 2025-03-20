<template>
  <div class="flex w-screen h-screen">
    <SideMenu />
    <div class="flex flex-col h-full w-full bg-gray-100 !py-5 !px-10">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideMenu from './SideMenu.vue'
</script>
