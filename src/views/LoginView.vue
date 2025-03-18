<script setup lang="ts">
import CustomInput from '@/components/CustomInput.vue'
</script>

<template>
  <div class="flex w-full h-lvh bg-gray">
    <div class="flex flex-col h-full w-[45%] items-center justify-center">
      <div class="absolute top-8 left-11">
        <img src="../assets/images/logo.png" alt="Logo Convicti" />
        <h4 class="font-semibold">CONVIC<span class="text-main-purple">TI</span></h4>
      </div>

      <div class="flex flex-col w-[60%] justify-center">
        <h3 class="font-bold text-2xl">Bem-vindo de Volta</h3>
        <p class="font-medium text-xs opacity-50 !mb-8">
          Insira sua credenciais para acessar a plataforma
        </p>

        <CustomInput type="email" placeholder="Seu e-mail" />
        <CustomInput type="password" placeholder="Sua senha" class="!py-3" />

        <button class="bg-main-purple text-white h-10 rounded-[6px] !mt-2">Entrar</button>
      </div>
    </div>
  </div>
</template>
