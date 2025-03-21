<template>
  <div class="wfull md:w-[35%] bg-white !py-3 !px-6 flex flex-col rounded-lg">
    <div class="flex justify-between items-center">
      <h3 class="font-semibold text-gray-200 opacity-45">{{ title }}</h3>
      <img :src="iconUrl" :alt="alt" class="h-6" />
    </div>
    <slot></slot>
    <div class="flex justify-between items-center">
      <div class="flex !gap-5 items-center">
        <PlatformStats :icon-url="androidIcon" :label="androidValue" alt="Ícone do android" />
        <PlatformStats :icon-url="appleIcon" :label="appleValue" alt="Ícone da apple" />
      </div>
      <div v-if="decreaseValue" class="flex items-center gap-1 justify-center">
        <span class="text-success font-semibold text-sm">{{ decreaseValue }}</span>
        <img src="../assets/icons/down.png" alt="Ícone representando decaída" class="h-3" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PlatformStats from './PlatformStats.vue'
import androidIcon from '@/assets/icons/android.png'
import appleIcon from '@/assets/icons/apple.png'

defineProps<{
  title: string
  iconUrl: string
  alt?: string
  androidValue: string
  appleValue: string
  decreaseValue?: string
}>()
</script>
