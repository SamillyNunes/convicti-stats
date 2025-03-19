<template>
  <div class="flex w-full h-lvh bg-gray-100">
    <div class="flex flex-col h-full w-[100%] lg:w-[55%] items-center justify-center">
      <div class="absolute top-8 left-11">
        <img src="../assets/images/logo.png" alt="Logo Convicti" />
        <h4 class="font-semibold">CONVIC<span class="text-main-purple">TI</span></h4>
      </div>

      <div class="flex flex-col w-[60%] justify-center">
        <h3 class="font-bold text-2xl">Bem-vindo de Volta</h3>
        <p class="font-medium text-xs opacity-50 !mb-8">
          Insira sua credenciais para acessar a plataforma
        </p>

        <form @submit.prevent="handleLogin">
          <CustomInput
            type="email"
            placeholder="Seu e-mail"
            v-model="username"
            :onChange="(v) => (username = v)"
          />
          <CustomInput
            type="password"
            placeholder="Sua senha"
            v-model="password"
            :onChange="(v) => (password = v)"
            class="!py-3"
          />

          <button type="submit" class="bg-main-purple text-white h-10 rounded-[6px] !mt-2 w-full">
            Entrar
          </button>
        </form>
      </div>
    </div>
    <div class="hidden md:inline md:w-full h-screen bg-main-purple">
      <img
        src="../assets/images/login_bg.jpg"
        alt="Imagem de exemplo da dashboard da aplicação."
        class="object-cover h-full w-full object-top"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomInput from '@/components/CustomInput.vue'
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const errorMsg = ref('')

const handleLogin = async () => {
  const authStore = useAuthStore()
  const isSuccess = await authStore.loginUser(username.value, password.value)
  if (isSuccess) {
    console.log('Logado!')
  } else {
    console.log('Não deu certo')
    errorMsg.value = 'Usuário ou senha inválidos!'
  }
}
</script>
