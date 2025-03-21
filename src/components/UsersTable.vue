<template>
  <div v-if="isLoading" class="flex items-center justify-center w-full h-[80%]">
    <CustomSpinner :is-purple="true" />
  </div>
  <div v-else-if="errorMsg" class="flex items-center justify-center w-full h-[80%]">
    <h2>{{ errorMsg }}</h2>
  </div>

  <NoItemsInfo v-else-if="users.length === 0" />

  <SettingsTableLayout v-else>
    <template v-slot:headers>
      <div class="table-cell w-2/12 py-1">Nome</div>
      <div class="table-cell w-3/12 py-1">Email</div>
      <div class="table-cell w-5/12 py-1">Perfil</div>
      <div class="table-cell w-2/12 py-1">Status</div>
    </template>
    <template v-slot:content>
      <div
        v-for="(user, index) in users"
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
          <EditButton
            @click="$emit('onEditUser', user)"
            class="absolute top-[50%] -translate-y-[50%]"
          />
        </div>
      </div>
    </template>
  </SettingsTableLayout>
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
