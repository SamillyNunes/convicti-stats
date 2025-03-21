<template>
  <Layout>
    <Title title="Estatísticas" />

    <div class="flex flex-col md:flex-row justify-between gap-6 !mt-5">
      <StatsCard
        v-if="authStore.downloadsAllowed"
        title="Downloads"
        :icon-url="cloudIcon"
        alt="Ícone de nuvem"
        :android-value="androidDownloads.toString()"
        :apple-value="iosDownloads.toString()"
      >
        <h1 class="font-bold text-[2.5rem]">{{ allDownloads }}</h1>
      </StatsCard>
      <StatsCard
        v-if="authStore.evaluationsAllowed"
        title="Avaliações"
        :icon-url="starsIcon"
        alt="Ícone representando estrelas dadas em avaliações"
        :android-value="androidEvaluations.toString()"
        :apple-value="iosEvaluations.toString()"
      >
        <h1 class="font-bold text-[2.5rem]">{{ allEvaluationsCount }}</h1>
      </StatsCard>
      <StatsCard
        v-if="authStore.errorsAllowed"
        title="Erros"
        :icon-url="errorsIcon"
        alt="Ícone vermelho em formato de x representando erros."
        :android-value="androidErrors.toString()"
        :apple-value="iosErrors.toString()"
        decrease-value="-5%"
      >
        <h1 class="font-bold text-[2.5rem]">{{ allErrors }}</h1>
      </StatsCard>
    </div>

    <FeedbacksCard v-if="authStore.feedbacksAllowed" :evaluations="allEvaluations" />

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
import { useDownloads } from '@/composables/useDownloads'
import { useEvaluations } from '@/composables/useEvaluations'
import { useErrors } from '@/composables/useErrors'

const authStore = useAuthStore()

const { allDownloads, androidDownloads, iosDownloads } = useDownloads()
const { allEvaluationsCount, androidEvaluations, iosEvaluations, allEvaluations } = useEvaluations()
const { allErrors, androidErrors, iosErrors } = useErrors()
</script>
