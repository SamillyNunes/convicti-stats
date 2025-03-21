<template>
  <div v-if="isLoading" class="flex items-center justify-center w-full h-[80%]">
    <CustomSpinner :is-purple="true" />
  </div>
  <div v-else-if="errorMsg" class="flex items-center justify-center w-full h-[80%]">
    <h2>{{ errorMsg }}</h2>
  </div>

  <NoItemsInfo v-else-if="users.length === 0" />

  <div v-else>
    <SettingsTableLayout class="max-h-56 md:h-min">
      <template v-slot:headers>
        <div class="table-cell w-2/12 py-1">Nome</div>
        <div class="table-cell w-3/12 py-1">Email</div>
        <div class="table-cell md:w-3/12 lg:w-5/12 py-1">Perfil</div>
        <div class="table-cell w-2/12 py-1">Status</div>
      </template>
      <template v-slot:content>
        <div
          v-for="(user, index) in users"
          :key="index"
          class="block div-row md:table-row align-top odd:bg-white even:bg-gray-150 relative"
        >
          <div class="block div-cell md:table-cell md:p-2" data-label="Nome">{{ user.name }}</div>
          <div class="block div-cell md:table-cell py-2" data-label="Email">{{ user.email }}</div>
          <div class="block div-cell md:table-cell py-2" data-label="Perfil">
            {{ user.profile.name }}
          </div>
          <div class="block div-cell md:table-cell py-2" data-label="Status">
            <StatusLabel :is-active="user.active" />
          </div>

          <div class="hidden md:table-cell relative">
            <EditButton
              @click="$emit('onEditUser', user)"
              class="absolute top-[50%] -translate-y-[50%]"
            />
          </div>
          <div class="table-cell md:hidden">
            <AppButton
              @click="$emit('onEditUser', user)"
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
import EditButton from './EditButton.vue'
import SettingsTableLayout from './SettingsTableLayout.vue'
import StatusLabel from './StatusLabel.vue'
import { onMounted, ref, watch } from 'vue'
import { getUsers } from '@/api/users'
import type IUser from '@/shared/interfaces/IUser'
import CustomSpinner from './CustomSpinner.vue'
import NoItemsInfo from './NoItemsInfo.vue'
import AppButton from './AppButton.vue'

const users = ref<IUser[]>([])
const isLoading = ref(false)
const errorMsg = ref('')

const props = defineProps({
  fetchUsersAgain: Boolean,
})

const emit = defineEmits(['onEditUser'])

onMounted(() => {
  fetchUsers()
})

watch(
  () => props.fetchUsersAgain,
  () => {
    fetchUsers()
  },
)

const fetchUsers = async () => {
  isLoading.value = true
  try {
    const response = await getUsers()
    users.value = response.data
  } catch (error: any) {
    errorMsg.value = error
  } finally {
    isLoading.value = false
  }
}
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
