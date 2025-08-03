<script setup lang="ts">
import { useHead } from "#imports";

const title =
  "Significado das Horas Iguais — Descubra o que o universo quer te dizer";
const description =
  "Você viu 11:11 ou 22:22? Descubra o verdadeiro significado das horas iguais, sinais espirituais e mensagens dos anjos.";
const pageUrl = "https://significadohorasiguais.com"; 
const imageUrl = `${pageUrl}/logo.png`;

useHead({
  title,
  meta: [
    { name: "description", content: description },

    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: pageUrl },
    { property: "og:type", content: "website" },
    { property: "og:image", content: imageUrl },
    { property: "og:locale", content: "pt_BR" },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
  ],
  link: [{ rel: "canonical", href: pageUrl }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        url: pageUrl,
        inLanguage: "pt-BR",
      }),
    },
  ],
});
</script>

<template>
  <div class="max-w-3xl mx-auto mt-10 px-4">
    <div class="mb-8 text-center">
      <h2 class="text-2xl font-bold mb-4">
        Descubra o que o universo quer te dizer
      </h2>
      <p class="text-lg">
        Você olhou o relógio e viu <strong>22:22</strong>? Ou talvez
        <strong>11:11</strong>? Isso pode ser mais do que uma coincidência.
        Muitas tradições espirituais acreditam que ver horas iguais é um sinal
        do universo — ou até mesmo uma mensagem dos anjos. Cada horário carrega
        um significado especial, ligado à sua energia, ao seu momento de vida e
        à sua intuição.
      </p>
    </div>

    <HoursList />

    <hr class="mt-10 border-t border-gray-600" />

    <div class="mt-10 text-sm leading-relaxed">
      <p class="mb-4 text-xl">🌟 <strong>Por que isso acontece?</strong></p>
      <ul class="list-disc list-inside space-y-1">
        <li>Um chamado à atenção espiritual</li>
        <li>Um alinhamento entre seus pensamentos e seu destino</li>
        <li>Um sinal de que algo importante está se aproximando</li>
        <li>
          A presença de seres de luz ou guias espirituais querendo se comunicar
        </li>
      </ul>
      <p class="my-6">
        Mantenha a mente aberta e o coração tranquilo. Cada número tem algo a
        revelar — e talvez hoje, o que você mais precisa seja simplesmente olhar
        com mais intenção para o tempo.
      </p>
    </div>
  </div>
</template>
