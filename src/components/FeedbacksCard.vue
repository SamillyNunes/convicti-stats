<template>
  <Card class="h-96 md:h-[35%]">
    <Subtitle subtitle="Feedbacks" />

    <NoItemsInfo v-if="evaluations.length === 0" />

    <table v-else class="table-fixed w-full border-separate border-spacing-y-1 overflow-y-auto">
      <thead
        class="hidden md:table-header-group font-normal text-xs text-gray-200 text-left opacity-40"
      >
        <tr>
          <th class="w-3/5">Avaliação</th>
          <th class="w-1/5">Data</th>
          <th class="w-1/5">Avaliação</th>
          <th class="w-1/5">Melhorias</th>
          <th class="w-1/5">Plataforma</th>
        </tr>
      </thead>
      <tbody class="text-[0.65rem] text-gray-200">
        <tr
          v-for="(evaluation, index) in evaluations"
          :key="index"
          class="block md:table-row md:align-top odd:bg-gray-150 even:bg-white"
        >
          <td class="block md:table-cell md:px-2 py-1" data-label="Descrição">
            {{ evaluation.description }}
          </td>
          <td class="block md:table-cell py-1" data-label="Data">
            {{ new Date(evaluation.created_at).toLocaleDateString('pt-br') }}
          </td>
          <td class="block md:table-cell py-1" data-label="Avaliação">
            {{ evaluation.evaluation }}
          </td>

          <td class="block md:table-cell md:pr-2 py-1" data-label="Melhorias">
            <span v-for="improvement in evaluation.improvements.split('\n\n')" class="block">
              {{ improvement }}
            </span>
          </td>
          <td class="block md:table-cell md:pr-2 py-1" data-label="Plataforma">
            {{ evaluation.platform }}
          </td>
        </tr>
      </tbody>
    </table>
  </Card>
</template>

<script setup lang="ts">
import Card from './Card.vue'
import NoItemsInfo from './NoItemsInfo.vue'
import Subtitle from './Subtitle.vue'
import type IEvaluation from '@/shared/interfaces/IEvaluation'

defineProps<{
  evaluations: IEvaluation[]
}>()
</script>

<style lang="css" scoped>
@media (max-width: 768px) {
  td::before {
    content: attr(data-label) ': ';
    font-weight: bold;
    display: block;
    width: 1rem;
  }
  tr {
    display: flex;
    flex-direction: column;
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }
}
</style>
