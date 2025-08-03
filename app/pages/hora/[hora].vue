<script setup lang="ts">
import { useRoute } from "vue-router";
import hoursJsonRaw from "~/data/hours.json";

interface HoursJsonType {
  [key: string]: string;
}

const hoursJson = hoursJsonRaw as HoursJsonType;
const route = useRoute();
const hourParam = route.params.hora as string | undefined;

const hourDescription =
  hourParam && hoursJson[hourParam] ? hoursJson[hourParam] : null;
</script>

<template>
  <div class="max-w-3xl mx-auto mt-8 px-4">
    <h2 class="text-3xl font-bold mb-6 text-center">
      {{
        hourParam
          ? `${hourParam} - Significado e Mensagem`
          : "Hora não encontrada"
      }}
    </h2>

    <p
      v-if="hourDescription"
      class="text-base mb-8"
      style="text-align: justify"
    >
      {{ hourDescription }}
    </p>
    <p v-else class="text-base text-red-600 mb-8 text-center">
      Não encontramos o significado para esta hora.
    </p>

    <div>
      <NuxtLink to="/" class="btn btn-soft btn-primary"> Voltar </NuxtLink>
    </div>
  </div>
</template>
