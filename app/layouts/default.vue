<script setup lang="ts">
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />

    <main class="flex-grow p-4 bg-base-200 text-base-content">
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
