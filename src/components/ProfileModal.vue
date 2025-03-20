<template>
  <div class="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
    <div class="bg-gray-100 w-[40%] p-8 rounded-lg">
      <Subtitle subtitle="Novo Perfil" />
      <form @submit.prevent="">
        <CustomInput placeholder="Novo Perfil" type="text" :onChange="() => {}" />

        <h4 class="text-gray-200/40 text-xs py-2">Dashboard</h4>

        <ProfileOption label="Downloads" />
        <ProfileOption label="Avaliações" />
        <ProfileOption label="Erros" />
        <ProfileOption label="Feedbacks" />
        <ProfileOption label="Novas funcionalidades" />

        <div class="w-full flex gap-4 mt-4">
          <button
            @click="onCancel"
            type="button"
            class="bg-gray-250/10 py-3 w-[40%] rounded-[0.35rem] text-gray-350 text-xs font-semibold hover:bg-gray-400 duration-200 cursor-pointer"
          >
            Voltar
          </button>
          <button
            type="submit"
            class="bg-blue/20 text-purple-2 text-xs font-semibold w-[60%] rounded-[0.35rem] hover:bg-main-purple/50 hover:text-white duration-200 cursor-pointer"
          >
            Adicionar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomInput from './CustomInput.vue'
import ProfileOption from './ProfileOption.vue'
import Subtitle from './Subtitle.vue'

defineProps<{
  onCancel: () => void
}>()
</script>
