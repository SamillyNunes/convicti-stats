<template>
  <div class="w-full flex gap-4 mt-4">
    <button
      @click="onCancel"
      type="button"
      class="bg-gray-250/10 py-3 w-[40%] rounded-[0.35rem] text-gray-350 text-xs font-semibold hover:bg-gray-400 duration-200 cursor-pointer"
    >
      Voltar
    </button>
    <AppButton :onClick="onConfirm" :label="`${isUpdating ? 'Atualizar' : 'Adicionar'}`" />
  </div>
</template>

<script setup lang="ts">
import AppButton from './AppButton.vue'

defineProps<{
  onCancel: () => void
  onConfirm: () => void
  isUpdating: boolean
}>()
</script>
