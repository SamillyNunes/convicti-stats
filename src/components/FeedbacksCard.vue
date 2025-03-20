<template>
  <Card class="h-[35%]">
    <h3 class="font-semibold text-xl text-gray-200 !mb-4">Feedbacks</h3>

    <table class="table-fixed w-full border-separate border-spacing-y-1">
      <thead class="font-normal text-xs text-gray-200 text-left opacity-40">
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
          v-for="(evaluation, index) in evaluations.data.data"
          :key="index"
          class="align-top odd:bg-gray-150 even:bg-white"
        >
          <td class="!px-2 !py-1">{{ evaluation.description }}</td>
          <td class="!py-1">
            {{ new Date(evaluation.created_at).toLocaleDateString('pt-br') }}
          </td>
          <td class="!py-1">{{ evaluation.evaluation }}</td>

          <td class="!pr-2 !py-1">
            <span v-for="improvement in evaluation.improvements.split('.')" class="block">
              {{ improvement }}
            </span>
          </td>
          <td class="!pr-2 !py-1">{{ evaluation.platform }}</td>
        </tr>
      </tbody>
    </table>
  </Card>
</template>

<script setup lang="ts">
import evaluations from '@/assets/evaluations.json'
import Card from './Card.vue'
</script>
