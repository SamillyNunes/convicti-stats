<template>
  <div class="w-full flex gap-4 mt-4">
    <button
      @click="onCancel"
      type="button"
      class="bg-gray-250/10 py-3 w-[40%] rounded-[0.35rem] text-gray-350 text-xs font-semibold hover:bg-gray-400 duration-200 cursor-pointer"
    >
      Voltar
    </button>
    <button
      @click="onConfirm"
      type="button"
      class="bg-blue/20 text-purple-2 text-xs font-semibold w-[60%] rounded-[0.35rem] hover:bg-main-purple/50 hover:text-white duration-200 cursor-pointer"
    >
      {{ isUpdating ? 'Atualizar' : 'Adicionar' }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  onCancel: () => void
  onConfirm: () => void
  isUpdating: boolean
}>()
</script>
