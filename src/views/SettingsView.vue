<template>
  <Layout>
    <Title title="Configurações" />

    <Card>
      <div class="flex justify-between items-center">
        <Subtitle subtitle="Perfis" />
        <AddButton />
      </div>

      <table class="table-fixed w-full border-separate border-spacing-y-1">
        <thead class="font-normal text-xs text-gray-200 opacity-40 text-left">
          <tr>
            <th class="w-1/4">Nome</th>
            <th class="w-1/4">Quantidade de Usuários</th>
            <th class="w-2/4">Permissões</th>
            <!-- <th></th> -->
          </tr>
        </thead>
        <tbody class="text-[0.65rem] text-gray-200">
          <tr
            v-for="(profile, index) in profiles.data"
            :key="index"
            class="align-top odd:bg-white even:bg-gray-150"
          >
            <td class="p-2">{{ profile.name }}</td>
            <td class="py-2">{{ profile.total_users }}</td>
            <td class="py-2">
              <RoundedLabel
                v-for="(permission, index) in profile.permissions"
                :key="index"
                :label="permission.name"
              />
              <RoundedLabel v-if="profile.permissions.length === 0" label="Nenhuma" />
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  </Layout>
</template>

<script setup lang="ts">
import AddButton from '@/components/AddButton.vue'
import Card from '@/components/Card.vue'
import Layout from '@/components/Layout.vue'
import Subtitle from '@/components/Subtitle.vue'
import Title from '@/components/Title.vue'
import profiles from '@/assets/profiles.json'
import RoundedLabel from '@/components/RoundedLabel.vue'
</script>
