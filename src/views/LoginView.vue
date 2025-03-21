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

          <span v-if="errorMsg" class="text-error text-xs block !mt-1 !mb-5">
            {{ errorMsg }}
          </span>

          <button
            type="submit"
            class="bg-main-purple text-white h-10 rounded-[6px] !mt-2 w-full justify-center flex items-center"
            :disabled="isLoading"
          >
            <CustomSpinner v-if="isLoading" />
            <span v-else>Enviar</span>
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
import CustomSpinner from '@/components/CustomSpinner.vue'
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const errorMsg = ref('')
const isLoading = ref(false)

const router = useRouter()

const handleLogin = async () => {
  isLoading.value = true
  errorMsg.value = ''
  const authStore = useAuthStore()

  try {
    const isLogged = await authStore.loginUser(username.value, password.value)
    if (isLogged) {
      router.push({ name: 'dashboard' })
    }
  } catch (error: any) {
    console.log('entrou no catch do login')
    errorMsg.value = error as string
  } finally {
    isLoading.value = false
  }
}
</script>
