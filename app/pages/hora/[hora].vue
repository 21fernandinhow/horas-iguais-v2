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

const baseUrl = "https://significadohorasiguais.com";

const title = hourParam
  ? `${hourParam} – Significado das Horas Iguais`
  : "Hora não encontrada";
const description = hourDescription
  ? hourDescription.replace(/\s+/g, " ").trim().slice(0, 160)
  : "Não encontramos o significado desta hora. Descubra o significado das horas iguais e o que o universo quer te dizer.";
const pageUrl = hourParam
  ? `${baseUrl}/hora/${encodeURIComponent(hourParam)}`
  : baseUrl;

const ogImage = `${baseUrl}/logo-og.png`;

useHead({
  title,
  meta: [
    { name: "description", content: description },

    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: pageUrl },
    { property: "og:type", content: "website" },
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ],
  link: [{ rel: "canonical", href: pageUrl }],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description: description,
        url: pageUrl,
        inLanguage: "pt-BR",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: baseUrl,
            },
            ...(hourParam
              ? [
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: hourParam,
                    item: pageUrl,
                  },
                ]
              : []),
          ],
        },
      }),
      tagPosition: "head",
    },
  ],
});
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
