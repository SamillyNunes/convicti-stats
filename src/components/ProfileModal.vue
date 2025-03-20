<template>
  <ModalLayout
    :onCancelButton="onCancel"
    :onConfirmButton="onSubmitProfile"
    :is-updating-fields="selectedProfile !== null"
    title="Novo Perfil"
    subtitle="Dashboard"
    :is-loading="isLoading"
  >
    <template v-slot:fields>
      <CustomInput
        placeholder="Novo Perfil"
        type="text"
        :input-value="profileName"
        :onChange="setProfileName"
      />
    </template>
    <template v-slot:choices>
      <ProfileOption
        label="Downloads"
        :is-active="permissions.includes(1)"
        @on-change-state="() => managePermissionInsideList(1)"
      />
      <ProfileOption
        label="Avaliações"
        :is-active="permissions.includes(2)"
        @on-change-state="() => managePermissionInsideList(2)"
      />
      <ProfileOption
        label="Erros"
        :is-active="permissions.includes(3)"
        @on-change-state="() => managePermissionInsideList(3)"
      />
      <ProfileOption
        label="Feedbacks"
        :is-active="permissions.includes(4)"
        @on-change-state="() => managePermissionInsideList(4)"
      />
      <ProfileOption
        label="Novas funcionalidades"
        :is-active="permissions.includes(5)"
        @on-change-state="() => managePermissionInsideList(5)"
      />
    </template>
  </ModalLayout>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue'
import CustomInput from './CustomInput.vue'
import ProfileOption from './ProfileOption.vue'
import Subtitle from './Subtitle.vue'
import { createProfile, updateProfile } from '@/api/profiles'
import { toast } from 'vue3-toastify'
import CustomSpinner from './CustomSpinner.vue'
import type IProfile from '@/shared/interfaces/IProfile'
import ModalLayout from './ModalLayout.vue'

const profileName = ref('')
const permissions = ref<Number[]>([])
const isLoading = ref(false)

const props = defineProps<{
  onCancel: () => void
  onConfirm: () => void
  selectedProfile?: IProfile
}>()

onBeforeMount(() => {
  console.log('entrou no bmount')
  checkSelectedProfile()
})

const checkSelectedProfile = () => {
  if (props.selectedProfile) {
    profileName.value = props.selectedProfile.name
    permissions.value = props.selectedProfile.permissions.map((p) => Number(p.id))
  }
}

const setProfileName = (name: string) => {
  profileName.value = name
}

const managePermissionInsideList = (permissionId: Number) => {
  if (permissions.value.includes(permissionId)) {
    permissions.value = permissions.value.filter((p) => p !== permissionId)
  } else {
    permissions.value.push(permissionId)
  }
}

const onSubmitProfile = async () => {
  isLoading.value = true
  try {
    var response
    if (props.selectedProfile) {
      response = await updateProfile(props.selectedProfile.id, profileName.value, permissions.value)
    } else {
      response = await createProfile(profileName.value, permissions.value)
    }
    if (response) {
      toast.success(`Perfil ${props.selectedProfile ? 'atualizado' : 'criado'} com sucesso!`)
      props.onConfirm()
    }
  } catch (error: any) {
    console.error(error)
    toast.error(error)
  } finally {
    isLoading.value = true
  }
}
</script>
