<template>
  <div @click="toggle" class="flex justify-between items-center pb-4">
    <h3 class="font-normal text-sm text-black">{{ label }}</h3>
    <input type="checkbox" class="sr-only" />

    <div
      class="w-7 h-4 flex items-center rounded-full p-1 cursor-pointer bg-gray-100"
      :class="status ? 'border-black border-2' : 'border-gray-400 border'"
    >
      <div
        class="w-2 h-2 rounded-full shadow-md transition-all"
        :class="
          status ? 'transform translate-x-2 border-black border-2' : ' border border-gray-400'
        "
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  label: String,
  isActive: {
    type: Boolean,
    default: false,
  },
})

const status = ref(props.isActive)

const toggle = () => {
  status.value = !status.value
}
</script>
