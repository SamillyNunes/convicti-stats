<template>
  <SettingsTableLayout>
    <template v-slot:headers>
      <div class="table-cell w-2/12 py-1">Nome</div>
      <div class="table-cell w-3/12 py-1">Email</div>
      <div class="table-cell w-5/12 py-1">Perfil</div>
      <div class="table-cell w-2/12 py-1">Status</div>
    </template>
    <template v-slot:content>
      <div
        v-for="(user, index) in users.data"
        :key="index"
        class="table-row align-top odd:bg-white even:bg-gray-150 relative"
      >
        <div class="table-cell p-2">{{ user.name }}</div>
        <div class="table-cell py-2">{{ user.email }}</div>
        <div class="table-cell py-2">{{ user.profile.name }}</div>
        <div class="table-cell py-2">
          <StatusLabel :is-active="user.active" />
        </div>

        <div class="relative table-cell">
          <EditButton class="absolute top-[50%] -translate-y-[50%]" />
        </div>
      </div>
    </template>
  </SettingsTableLayout>
</template>

<script setup lang="ts">
import EditButton from './EditButton.vue'
import SettingsTableLayout from './SettingsTableLayout.vue'
import users from '@/assets/users.json'
import StatusLabel from './StatusLabel.vue'
</script>
