<template>
  <div class="flex w-screen h-screen">
    <SideMenu />

    <div class="flex flex-col h-full w-full bg-gray-100 !py-5 !px-10">
      <h1 class="font-bold text-3xl">Estatísticas</h1>

      <div class="flex justify-between gap-6 !mt-5">
        <StatsCard
          title="Downloads"
          :icon-url="cloudIcon"
          alt="Ícone de nuvem"
          android-value="240"
          apple-value="90"
        >
          <h1 class="font-bold text-[2.5rem]">330</h1>
        </StatsCard>
        <StatsCard
          title="Avaliações"
          :icon-url="starsIcon"
          alt="Ícone representando estrelas dadas em avaliações"
          android-value="5.0"
          apple-value="4.0"
        >
          <h1 class="font-bold text-[2.5rem]">330</h1>
        </StatsCard>
        <StatsCard
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

      <FeedbacksCard />

      <FeaturesCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import SideMenu from '@/components/SideMenu.vue'
import StatsCard from '@/components/StatsCard.vue'
import cloudIcon from '@/assets/icons/cloud.png'
import starsIcon from '@/assets/icons/stars.png'
import errorsIcon from '@/assets/icons/errors.png'
import FeedbacksCard from '@/components/FeedbacksCard.vue'
import FeaturesCard from '@/components/FeaturesCard.vue'
</script>
