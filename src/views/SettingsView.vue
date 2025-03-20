<template>
  <Layout>
    <Title title="Configurações" />

    <Card class="h-[40%]">
      <div class="flex justify-between items-center">
        <Subtitle subtitle="Perfis" />
        <AddButton />
      </div>

      <ProfilesTable />
    </Card>
    <Card class="h-[40%]">
      <div class="flex justify-between items-center">
        <Subtitle subtitle="Usuários" />
        <AddButton />
      </div>

      <UsersTable />
    </Card>
  </Layout>

  <ProfileModal />
</template>

<script setup lang="ts">
import AddButton from '@/components/AddButton.vue'
import Card from '@/components/Card.vue'
import Layout from '@/components/Layout.vue'
import Subtitle from '@/components/Subtitle.vue'
import Title from '@/components/Title.vue'
import ProfilesTable from '@/components/ProfilesTable.vue'
import UsersTable from '@/components/UsersTable.vue'
import ProfileModal from '@/components/ProfileModal.vue'
</script>
