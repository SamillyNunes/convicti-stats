<template>
  <div class="w-screen h-screen">
    <div class="flex">
      <SideMenu />
      <div class="flex flex-col h-full w-full bg-gray-100 !py-5 !px-10">
        <slot></slot>
      </div>
    </div>
    <BottomMenu />
  </div>
</template>

<script setup lang="ts">
import BottomMenu from './BottomMenu.vue'
import SideMenu from './SideMenu.vue'
</script>
