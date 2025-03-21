<template>
  <div class="fixed bottom-0 flex w-full h-[10%] bg-white justify-around md:hidden">
    <MenuButton
      @click="goToDashboardView"
      title="Dashboard"
      :icon-url="dashboardIcon"
      :is-active="isInsideDashboardView"
    />
    <MenuButton
      @click="goToSettingsView"
      title="Configurações"
      :icon-url="settingsIcon"
      :is-active="!isInsideDashboardView"
    />

    <MenuButton @click="openDialog" title="Sair" :icon-url="exitIcon" :is-active="false" />
  </div>

  <ConfirmDialog
    v-if="isDialogOpen"
    :onCancel="() => (isDialogOpen = false)"
    :onConfirm="handleLogout"
  />
</template>

<script setup lang="ts">
import MenuButton from './MenuButton.vue'
import dashboardIcon from '@/assets/icons/dashboard.png'
import settingsIcon from '@/assets/icons/settings.png'
import exitIcon from '@/assets/icons/leave.png'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import ConfirmDialog from './ConfirmDialog.vue'
import { ref } from 'vue'

const router = useRouter()

const isDialogOpen = ref(false)
const isInsideDashboardView = ref(router.currentRoute.value.name === 'dashboard')

const openDialog = () => {
  isDialogOpen.value = true
}

const handleLogout = () => {
  const authStore = useAuthStore()
  authStore.logoutUser()
  router.push('/login')
}

const goToSettingsView = () => {
  router.push('/settings')
}

const goToDashboardView = () => {
  router.push('/dashboard')
}
</script>
