<template>
  <Layout>
    <Title title="Estatísticas" />

    <div class="flex justify-between gap-6 !mt-5">
      <StatsCard
        v-if="authStore.downloadsAllowed"
        title="Downloads"
        :icon-url="cloudIcon"
        alt="Ícone de nuvem"
        android-value="240"
        apple-value="90"
      >
        <h1 class="font-bold text-[2.5rem]">330</h1>
      </StatsCard>
      <StatsCard
        v-if="authStore.evaluationsAllowed"
        title="Avaliações"
        :icon-url="starsIcon"
        alt="Ícone representando estrelas dadas em avaliações"
        android-value="5.0"
        apple-value="4.0"
      >
        <h1 class="font-bold text-[2.5rem]">330</h1>
      </StatsCard>
      <StatsCard
        v-if="authStore.errorsAllowed"
        title="Erros"
        :icon-url="errorsIcon"
        alt="Ícone vermelho em formato de x representando erros."
        android-value="2"
        apple-value="1"
        decrease-value="-5%"
      >
        <h1 class="font-bold text-[2.5rem]">330</h1>
      </StatsCard>
    </div>

    <FeedbacksCard v-if="authStore.feedbacksAllowed" />

    <FeaturesCard v-if="authStore.featuresAllowed" />
  </Layout>
</template>

<script setup lang="ts">
import StatsCard from '@/components/StatsCard.vue'
import cloudIcon from '@/assets/icons/cloud.png'
import starsIcon from '@/assets/icons/stars.png'
import errorsIcon from '@/assets/icons/errors.png'
import FeedbacksCard from '@/components/FeedbacksCard.vue'
import FeaturesCard from '@/components/FeaturesCard.vue'
import Layout from '@/components/Layout.vue'
import Title from '@/components/Title.vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

console.log('dashboardd')
console.log(authStore.user)
</script>
