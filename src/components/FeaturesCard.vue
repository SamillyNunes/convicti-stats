<template>
  <Card class="h-[27%]">
    <Subtitle subtitle="Novas Funcionalidades" />

    <table class="table-fixed w-full border-separate border-spacing-y-1">
      <thead class="font-normal text-xs text-gray-200 opacity-40">
        <tr>
          <th class="w-3/4 text-left">Funcionalidade</th>
          <th class="w-1/4 text-right">Taxa De Uso</th>
        </tr>
      </thead>
      <tbody class="text-[0.65rem] text-gray-200">
        <tr
          v-for="(feature, index) in allNewFeatures"
          :key="index"
          class="align-top odd:bg-white even:bg-gray-150"
        >
          <td class="text-[0.9rem] !py-0.5 !px-2">{{ feature.name }}</td>
          <td class="text-right text-success font-bold text-[0.9rem]">
            {{ feature.total_usage }}%
          </td>
        </tr>
      </tbody>
    </table>
  </Card>
</template>

<script setup lang="ts">
import { useFeatures } from '@/composables/useFeatures'
import Card from './Card.vue'
import Subtitle from './Subtitle.vue'

const { allNewFeatures } = useFeatures()
</script>
