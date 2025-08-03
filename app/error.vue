<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-base-200">
    <h1 class="text-6xl font-bold">
      {{ error?.statusCode === 404 ? '404' : 'Erro' }}
    </h1>
    <p class="mt-4 text-xl">
      {{ error?.statusCode === 404 ? 'Página não encontrada' : error?.message || "Erro não identificado." }}
    </p>
    <NuxtLink to="/" class="mt-6 btn btn-primary">
      Voltar para a página inicial
    </NuxtLink>
  </div>
</template>