<template>
  <Card class="h-[27%]">
    <Subtitle subtitle="Novas Funcionalidades" />

    <NoItemsInfo v-if="featuresStore.allNewFeatures.length === 0" />

    <table v-else class="table-fixed w-full border-separate border-spacing-y-1">
      <thead class="font-normal text-xs text-gray-200 opacity-40">
        <tr>
          <th class="w-3/4 text-left">Funcionalidade</th>
          <th class="w-1/4 text-right">Taxa De Uso</th>
        </tr>
      </thead>
      <tbody class="text-[0.65rem] text-gray-200">
        <tr
          v-for="(feature, index) in featuresStore.allNewFeatures"
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
import Card from './Card.vue'
import Subtitle from './Subtitle.vue'
import NoItemsInfo from './NoItemsInfo.vue'
import { useFeaturesStore } from '@/stores/features'
import { onMounted } from 'vue'

const featuresStore = useFeaturesStore()

onMounted(() => {
  featuresStore.fetchNewFeatures()
})
</script>
