<template>
  <div>
    <VitePwaManifest />
    <!-- app.vue -->
    <NuxtLayout>
      <LoadingLogo v-if="loading" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import LoadingLogo from './components/loadingLogo.vue'
import { ref, onMounted } from 'vue'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000) // fake loading for 1s or replace with actual logic
})

</script>