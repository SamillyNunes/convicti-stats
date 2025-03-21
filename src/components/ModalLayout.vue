<template>
  <div class="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
    <div class="bg-gray-100 w-[85%] md:w-[40%] p-8 rounded-lg">
      <div v-if="isLoading" class="flex items-center justify-center w-full">
        <CustomSpinner :is-purple="true" />
      </div>

      <div v-else>
        <Subtitle :subtitle="title" />

        <slot name="fields"></slot>

        <h4 class="text-gray-200/40 text-xs py-2">{{ subtitle }}</h4>

        <slot name="choices"></slot>

        <BackAddButtons
          :onCancel="onCancelButton"
          :onConfirm="onConfirmButton"
          :is-updating="isUpdatingFields"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BackAddButtons from './BackAddButtons.vue'
import CustomSpinner from './CustomSpinner.vue'
import Subtitle from './Subtitle.vue'

defineProps<{
  onCancelButton: () => void
  onConfirmButton: () => void
  isUpdatingFields: boolean
  title: string
  subtitle: string
  isLoading: boolean
}>()
</script>
