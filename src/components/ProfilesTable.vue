<template>
  <div v-if="isLoading" class="flex items-center justify-center w-full h-[80%]">
    <CustomSpinner :is-purple="true" />
  </div>
  <div v-else-if="errorMsg" class="flex items-center justify-center w-full h-[80%]">
    <h2>{{ errorMsg }}</h2>
  </div>

  <NoItemsInfo v-else-if="profiles.length === 0" />

  <div v-else class="max-h-56 md:h-min">
    <SettingsTableLayout>
      <template v-slot:headers>
        <div class="table-cell w-2/12 py-1">Nome</div>
        <div class="table-cell w-2/12 py-1">Quantidade de Usuários</div>
        <div class="table-cell w-7/12 py-1">Permissões</div>
      </template>
      <template v-slot:content>
        <div
          v-for="(profile, index) in profiles"
          :key="index"
          class="block div-row md:table-row align-top odd:bg-white even:bg-gray-150 relative"
        >
          <div class="block div-cell md:table-cell md:p-2" data-label="Nome">
            {{ profile.name }}
          </div>
          <div class="block div-cell md:table-cell py-2" data-label="Quantidade de Usuários">
            {{ profile.total_users }}
          </div>
          <div class="block div-cell md:table-cell py-2" data-label="Permissões">
            <RoundedLabel v-if="profile.permissions.length === 5" label="Tudo" />
            <RoundedLabel
              v-else
              v-for="(permission, index) in profile.permissions"
              :key="index"
              :label="permission.name"
            />
            <RoundedLabel v-if="profile.permissions.length === 0" label="Nenhuma" />
          </div>
          <div class="hidden md:table-cell relative">
            <EditButton
              @click="$emit('onEditProfile', profile)"
              class="absolute top-[50%] -translate-y-[50%]"
            />
          </div>
          <div class="table-cell md:hidden">
            <AppButton
              @click="$emit('onEditProfile', profile)"
              label="Editar"
              class="!mt-4 !w-full h-6"
            />
          </div>
        </div>
      </template>
    </SettingsTableLayout>
  </div>
</template>

<script setup lang="ts">
import SettingsTableLayout from './SettingsTableLayout.vue'
import EditButton from './EditButton.vue'
import RoundedLabel from './RoundedLabel.vue'
import type IProfile from '@/shared/interfaces/IProfile'
import CustomSpinner from './CustomSpinner.vue'
import NoItemsInfo from './NoItemsInfo.vue'
import AppButton from './AppButton.vue'

defineProps<{
  profiles: IProfile[]
  isLoading: boolean
  errorMsg?: string
}>()

const emit = defineEmits(['onEditProfile'])
</script>

<style lang="css" scoped>
@media (max-width: 767px) {
  .div-cell::before {
    content: attr(data-label) ': ';
    font-weight: bold;
    display: block;
    width: auto;
  }
  .div-row {
    display: flex;
    flex-direction: column;
    padding: 8px;
    border-bottom: 1px solid #ddd;
  }
}
</style>
