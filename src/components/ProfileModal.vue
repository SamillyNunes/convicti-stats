<template>
  <div class="fixed inset-0 bg-black/30 flex justify-center items-center z-50" @click="onCancel">
    <div class="bg-gray-100 w-[40%] p-8 rounded-lg">
      <div v-if="isLoading" class="flex items-center justify-center w-full">
        <CustomSpinner :is-purple="true" />
      </div>

      <div v-else-if="errorMsg" class="flex items-center justify-center w-full">
        <h2>{{ errorMsg }}</h2>
      </div>

      <div v-else>
        <Subtitle subtitle="Novo Perfil" />

        <CustomInput placeholder="Novo Perfil" type="text" :onChange="setProfileName" />

        <h4 class="text-gray-200/40 text-xs py-2">Dashboard</h4>

        <ProfileOption
          label="Downloads"
          @on-change-state="(v: boolean) => managePermissionInsideList(1, v)"
        />
        <ProfileOption
          label="Avaliações"
          @on-change-state="(v: boolean) => managePermissionInsideList(2, v)"
        />
        <ProfileOption
          label="Erros"
          @on-change-state="(v: boolean) => managePermissionInsideList(3, v)"
        />
        <ProfileOption
          label="Feedbacks"
          @on-change-state="(v: boolean) => managePermissionInsideList(4, v)"
        />
        <ProfileOption
          label="Novas funcionalidades"
          @on-change-state="(v: boolean) => managePermissionInsideList(5, v)"
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
            Adicionar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomInput from './CustomInput.vue'
import ProfileOption from './ProfileOption.vue'
import Subtitle from './Subtitle.vue'
import { createProfile } from '@/api/profiles'
import { toast } from 'vue3-toastify'
import CustomSpinner from './CustomSpinner.vue'

const profileName = ref('')
const permissions = ref<Number[]>([])
const isLoading = ref(false)
const errorMsg = ref('')

const props = defineProps<{
  onCancel: () => void
}>()

const setProfileName = (name: string) => {
  profileName.value = name
}

const managePermissionInsideList = (permissionId: Number, permissionIsActive: boolean) => {
  if (permissionIsActive) {
    if (permissions.value.includes(permissionId)) {
      permissions.value = permissions.value.filter((p) => p !== permissionId)
    } else {
      permissions.value.push(permissionId)
    }
  }
}

const onSubmitProfile = async () => {
  isLoading.value = true
  try {
    const resp = await createProfile(profileName.value, permissions.value)
    if (resp) {
      toast.success('Perfil criado com sucesso!')
      props.onCancel()
    }
  } catch (error: any) {
    console.error(error)
    errorMsg.value = error
  } finally {
    isLoading.value = true
  }
}
</script>
