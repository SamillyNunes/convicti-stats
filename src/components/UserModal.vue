<template>
  <ModalLayout
    :onCancelButton="onCancel"
    :onConfirmButton="() => {}"
    :is-updating-fields="selectedUser !== undefined"
    title="Novo Usuário"
    subtitle="Perfil"
    :is-loading="isLoading"
  >
    <template v-slot:fields>
      <CustomInput
        placeholder="Nome do usuário"
        type="text"
        :input-value="username"
        :onChange="setUserName"
      />
      <CustomInput placeholder="Email" type="email" :input-value="email" :onChange="setEmail" />
    </template>
    <template v-slot:choices>
      <div
        class="flex justify-between items-center pb-4"
        v-for="(profile, index) in profiles"
        :key="index"
      >
        <label :for="profile.id" class="font-normal text-sm text-black">{{ profile.name }}</label>
        <input
          type="radio"
          :id="profile.id"
          :value="profile.id"
          v-model="profileId"
          class="accent-main-purple w-10 border-main-purple"
        />
      </div>
    </template>
  </ModalLayout>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import CustomInput from './CustomInput.vue'
import ProfileOption from './ProfileOption.vue'
import { createProfile, updateProfile } from '@/api/profiles'
import { toast } from 'vue3-toastify'
import type IProfile from '@/shared/interfaces/IProfile'
import ModalLayout from './ModalLayout.vue'
import type IUser from '@/shared/interfaces/IUser'

const username = ref('')
const email = ref('')
const profileId = ref('')
const isLoading = ref(false)

const props = defineProps<{
  onCancel: () => void
  onConfirm: () => void
  profiles: IProfile[]
  selectedUser?: IUser
}>()

onBeforeMount(() => {
  checkSelectedUser()
})

const checkSelectedUser = () => {
  if (props.selectedUser) {
    username.value = props.selectedUser.name
    email.value = props.selectedUser.email
    console.log('selected:')
    console.log(props.selectedUser)
    console.log(props.selectedUser.profile_id)
    console.log(profileId.value)
    profileId.value = props.selectedUser.profile_id.toString()
  }
}

const setUserName = (name: string) => {
  username.value = name
}

const setEmail = (e: string) => {
  email.value = e
}

// const onSubmitProfile = async () => {
//   isLoading.value = true
//   try {
//     var response
//     if (props.selectedProfile) {
//       response = await updateProfile(props.selectedProfile.id, profileName.value, permissions.value)
//     } else {
//       response = await createProfile(profileName.value, permissions.value)
//     }
//     if (response) {
//       toast.success(`Perfil ${props.selectedProfile ? 'atualizado' : 'criado'} com sucesso!`)
//       props.onConfirm()
//     }
//   } catch (error: any) {
//     console.error(error)
//     toast.error(error)
//   } finally {
//     isLoading.value = true
//   }
// }
</script>
