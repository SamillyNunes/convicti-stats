<template>
  <div class="flex flex-col h-full bg-white w-[25%] items-center !justify-between !py-8">
    <div class="flex flex-col items-center">
      <img src="../assets/images/logo.png" alt="Logo Convicti" class="h-14" />
      <h4 class="font-bold tracking-[2px] !mt-7 !mb-4">PAINEL DE DADOS</h4>
      <MenuButton title="Dashboard" :icon-url="dashboardIcon" :is-active="true" />
    </div>
    <div class="flex flex-col items-center">
      <MenuButton title="Configurações" :icon-url="settingsIcon" :is-active="false" />
      <MenuButton title="Sair" :icon-url="exitIcon" :is-active="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuButton from './MenuButton.vue'
import dashboardIcon from '@/assets/icons/dashboard.png'
import settingsIcon from '@/assets/icons/settings.png'
import exitIcon from '@/assets/icons/leave.png'
</script>
