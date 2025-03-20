<template>
  <div class="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
    <div class="bg-gray-100 w-[40%] p-8 rounded-lg">
      <div v-if="isLoading" class="flex items-center justify-center w-full">
        <CustomSpinner :is-purple="true" />
      </div>

      <div v-else>
        <Subtitle subtitle="Novo Perfil" />

        <CustomInput
          placeholder="Novo Perfil"
          type="text"
          :input-value="profileName"
          :onChange="setProfileName"
        />

        <h4 class="text-gray-200/40 text-xs py-2">Dashboard</h4>

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

        <div class="w-full flex gap-4 mt-4">
          <button
            @click="onCancel"
            type="button"
            class="bg-gray-250/10 py-3 w-[40%] rounded-[0.35rem] text-gray-350 text-xs font-semibold hover:bg-gray-400 duration-200 cursor-pointer"
          >
            Voltar
          </button>
          <button
            @click="onSubmitProfile"
            type="button"
            class="bg-blue/20 text-purple-2 text-xs font-semibold w-[60%] rounded-[0.35rem] hover:bg-main-purple/50 hover:text-white duration-200 cursor-pointer"
          >
            {{ selectedProfile ? 'Atualizar' : 'Adicionar' }}
          </button>
        </div>
      </div>
    </div>
  </div>
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
