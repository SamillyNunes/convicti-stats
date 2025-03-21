<template>
  <div class="flex flex-col h-full w-full items-center mt-10 px-[30%]">
    <h1 class="font-bold text-4xl mb-5">Ops!</h1>
    <h2 class="font-semibold text-xl mb-5 text-center">
      Esse endereço não foi encontrado. Que tal voltar para nossa página inicial?
    </h2>
    <AppButton @click="onBackToHome" label="Voltar para o inicio" class="!w-full h-10" />
  </div>
</template>

<script setup lang="ts">
import AppButton from '@/components/AppButton.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const onBackToHome = () => {
  router.push('/')
}
</script>
