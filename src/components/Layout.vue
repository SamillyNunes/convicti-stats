<template>
  <div class="w-screen h-screen">
    <div class="flex md:w-full md:h-full">
      <SideMenu />
      <div class="flex flex-col h-full w-full bg-gray-100 py-5 px-7 lg:px-10">
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
