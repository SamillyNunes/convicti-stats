<template>
  <div class="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
    <div class="bg-white p-5 rounded-lg shadow-lg w-96">
      <h2 class="font-bold text-lg">Confirmação</h2>

      <p class="pb-10">Tem certeza que deseja sair?</p>

      <div class="flex justify-end gap-2">
        <button
          @click="onCancel"
          class="px-4 py-2 bg-main-purple text-white rounded hover:bg-main-purple/70 duration-200"
        >
          Cancelar
        </button>
        <button
          @click="onConfirm"
          class="px-4 py-2 bg-gray-400 rounded hover:bg-gray-400/70 duration-200"
        >
          Sair
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  onCancel: () => void
  onConfirm: () => void
}>()
</script>
