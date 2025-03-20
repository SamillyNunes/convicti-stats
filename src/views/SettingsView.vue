<template>
  <Layout>
    <Title title="Configurações" />

    <Card class="h-[40%]">
      <div class="flex justify-between items-center">
        <Subtitle subtitle="Perfis" />
        <AddButton @click="toggleProfileModal" />
      </div>

      <ProfilesTable
        :profiles="profiles"
        :error-msg="profilesErrorMsg"
        :is-loading="areProfilesLoading"
        @onEditProfile="(p: IProfile) => onEditProfile(p)"
      />
    </Card>
    <Card class="h-[40%]">
      <div class="flex justify-between items-center">
        <Subtitle subtitle="Usuários" />
        <AddButton @click="toggleUserModal" />
      </div>

      <UsersTable
        @on-edit-user="(u: IUser) => onEditUser(u)"
        :fetch-users-again="fetchUsersAgain"
      />
    </Card>
  </Layout>

  <ProfileModal
    v-if="isProfileModalOpened"
    :selected-profile="selectedProfile"
    :onCancel="onCloseProfileModal"
    :onConfirm="onSuccessSubmitProfile"
  />

  <UserModal
    v-if="isUserModalOpened"
    :onCancel="onCloseUserModal"
    :selected-user="selectedUser"
    :onConfirm="onSuccessSubmitUser"
    :profiles="profiles"
    @fetchUsersAgain="toggleFetchUsersAgain"
  />
</template>

<script setup lang="ts">
import AddButton from '@/components/AddButton.vue'
import Card from '@/components/Card.vue'
import Layout from '@/components/Layout.vue'
import Subtitle from '@/components/Subtitle.vue'
import Title from '@/components/Title.vue'
import ProfilesTable from '@/components/ProfilesTable.vue'
import UsersTable from '@/components/UsersTable.vue'
import ProfileModal from '@/components/ProfileModal.vue'
import { onMounted, ref } from 'vue'
import { getProfiles } from '@/api/profiles'
import type IProfile from '@/shared/interfaces/IProfile'
import UserModal from '@/components/UserModal.vue'
import type IUser from '@/shared/interfaces/IUser'

const isProfileModalOpened = ref(false)
const isUserModalOpened = ref(false)
// independente de ser true ou false, se mudar vai atualizar na UsersTable:
const fetchUsersAgain = ref(false)

const profiles = ref<IProfile[]>([])
const areProfilesLoading = ref(false)
const profilesErrorMsg = ref('')
const selectedProfile = ref<IProfile | undefined>()
const selectedUser = ref<IUser | undefined>()

onMounted(() => {
  fetchProfiles()
})

const toggleProfileModal = () => {
  isProfileModalOpened.value = !isProfileModalOpened.value
}

const toggleUserModal = () => {
  isUserModalOpened.value = !isUserModalOpened.value
}

const toggleFetchUsersAgain = () => {
  fetchUsersAgain.value = !fetchUsersAgain.value
}

const onSuccessSubmitProfile = () => {
  fetchProfiles()
  toggleProfileModal()
  selectedProfile.value = undefined
}

const onSuccessSubmitUser = () => {
  fetchProfiles() // para que carregue o novo valor de usuarios por perfil
  toggleUserModal()
  selectedUser.value = undefined
}

const onCloseProfileModal = () => {
  toggleProfileModal()
  selectedProfile.value = undefined
}

const onCloseUserModal = () => {
  toggleUserModal()
  selectedUser.value = undefined
}

const onEditProfile = (profile: IProfile) => {
  selectedProfile.value = profile
  toggleProfileModal()
}

const onEditUser = (u: IUser) => {
  selectedUser.value = u
  toggleUserModal()
}

const fetchProfiles = async () => {
  areProfilesLoading.value = true
  try {
    const response = await getProfiles()
    profiles.value = response.data
  } catch (error: any) {
    profilesErrorMsg.value = error
  } finally {
    areProfilesLoading.value = false
  }
}
</script>
