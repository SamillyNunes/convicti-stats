<template>
  <SettingsTableLayout>
    <template v-slot:headers>
      <div class="table-cell w-2/12 py-1">Nome</div>
      <div class="table-cell w-2/12 py-1">Quantidade de Usuários</div>
      <div class="table-cell w-7/12 py-1">Permissões</div>
    </template>
    <template v-slot:content>
      <div
        v-for="(profile, index) in profiles.data"
        :key="index"
        class="table-row align-top odd:bg-white even:bg-gray-150 relative"
      >
        <div class="table-cell p-2">{{ profile.name }}</div>
        <div class="table-cell py-2">{{ profile.total_users }}</div>
        <div class="table-cell py-2">
          <RoundedLabel
            v-for="(permission, index) in profile.permissions"
            :key="index"
            :label="permission.name"
          />
          <RoundedLabel v-if="profile.permissions.length === 0" label="Nenhuma" />
        </div>
        <div class="relative table-cell">
          <button
            class="bg-white w-8 h-8 p-2 absolute top-[50%] -translate-y-[50%] right-0 cursor-pointer"
          >
            <img
              src="../assets/icons/edit.png"
              alt="Ícone de editar"
              class="w-[0.85rem] h-[0.85rem]"
            />
          </button>
        </div>
      </div>
    </template>
  </SettingsTableLayout>
</template>

<script setup lang="ts">
import profiles from '@/assets/profiles.json'
import SettingsTableLayout from './SettingsTableLayout.vue'
</script>
