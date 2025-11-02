<template lang="pug">
  app-header
  router-view
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStateStore } from '@/stores/app-state'
import { getProcess } from '@/assets/js/core/process'
import { waitForTimeOutPromise } from '@/assets/js/core/waitForTimeoutPromise'
import AppHeader from '@/components/core/AppHeader.vue'

const appStateStore = useAppStateStore()

const { isLoading } = storeToRefs(appStateStore)

watch(isLoading, async (to, from) => {
  console.log('###is loading', isLoading.value)
  
  if (!getProcess().client) return

  if (to === from || to) return

  const preloader = document.getElementById('start-spinner')

  if (!preloader) return

  await waitForTimeOutPromise(1000);

  preloader.classList.add('loaded')

  await waitForTimeOutPromise(2500)

  preloader.remove()
})
</script>
