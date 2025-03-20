<template>
  <ModalLayout
    :onCancelButton="onCancel"
    :onConfirmButton="onSubmitUser"
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
import { toast } from 'vue3-toastify'
import type IProfile from '@/shared/interfaces/IProfile'
import ModalLayout from './ModalLayout.vue'
import type IUser from '@/shared/interfaces/IUser'
import { createUser, updateUser } from '@/api/users'

const username = ref('')
const email = ref('')
const profileId = ref('1')
const isLoading = ref(false)

const props = defineProps<{
  onCancel: () => void
  onConfirm: () => void
  profiles: IProfile[]
  selectedUser?: IUser
}>()

const emit = defineEmits(['fetchUsersAgain'])

onBeforeMount(() => {
  checkSelectedUser()
})

const checkSelectedUser = () => {
  if (props.selectedUser) {
    username.value = props.selectedUser.name
    email.value = props.selectedUser.email
    profileId.value = props.selectedUser.profile_id.toString()
  }
}

const setUserName = (name: string) => {
  username.value = name
}

const setEmail = (e: string) => {
  email.value = e
}

const onSubmitUser = async () => {
  isLoading.value = true
  try {
    var response
    if (props.selectedUser) {
      response = await updateUser(
        props.selectedUser.id,
        username.value,
        email.value,
        profileId.value,
      )
    } else {
      response = await createUser(username.value, email.value, profileId.value)
    }

    if (response) {
      toast.success(`Usuário ${props.selectedUser ? 'atualizado' : 'criado'} com sucesso!`)
      props.onConfirm()
      emit('fetchUsersAgain')
    }
  } catch (error: any) {
    console.error(error)
    toast.error(error)
  } finally {
    isLoading.value = true
  }
}
</script>
