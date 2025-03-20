<template>
  <div v-if="isLoading" class="flex items-center justify-center w-full h-[80%]">
    <CustomSpinner :is-purple="true" />
  </div>
  <div v-else-if="errorMsg" class="flex items-center justify-center w-full h-[80%]">
    <h2>{{ errorMsg }}</h2>
  </div>
  <SettingsTableLayout v-else>
    <template v-slot:headers>
      <div class="table-cell w-2/12 py-1">Nome</div>
      <div class="table-cell w-2/12 py-1">Quantidade de Usuários</div>
      <div class="table-cell w-7/12 py-1">Permissões</div>
    </template>
    <template v-slot:content>
      <div
        v-for="(profile, index) in profiles"
        :key="index"
        class="table-row align-top odd:bg-white even:bg-gray-150 relative"
      >
        <div class="table-cell p-2">{{ profile.name }}</div>
        <div class="table-cell py-2">{{ profile.total_users }}</div>
        <div class="table-cell py-2">
          <RoundedLabel v-if="profile.permissions.length === 5" label="Tudo" />
          <RoundedLabel
            v-else
            v-for="(permission, index) in profile.permissions"
            :key="index"
            :label="permission.name"
          />
          <RoundedLabel v-if="profile.permissions.length === 0" label="Nenhuma" />
        </div>
        <div class="relative table-cell">
          <EditButton
            @click="$emit('onEditProfile', profile)"
            class="absolute top-[50%] -translate-y-[50%]"
          />
        </div>
      </div>
    </template>
  </SettingsTableLayout>
</template>

<script setup lang="ts">
import SettingsTableLayout from './SettingsTableLayout.vue'
import EditButton from './EditButton.vue'
import RoundedLabel from './RoundedLabel.vue'
import type IProfile from '@/shared/interfaces/IProfile'
import CustomSpinner from './CustomSpinner.vue'

defineProps<{
  profiles: IProfile[]
  isLoading: boolean
  errorMsg?: string
}>()

const emit = defineEmits(['onEditProfile'])
</script>
