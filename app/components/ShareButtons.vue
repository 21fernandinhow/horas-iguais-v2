<script setup lang="ts">
import { Icon } from "@iconify/vue";

interface Props {
  hour: string;
}

const props = defineProps<Props>();

const postUrl = `https://significadohorasiguais.com/hora/${props.hour}`;
const shareMessage = `Vi a hora ${props.hour} e descobri uma mensagem incrível do universo! Veja você também: ${postUrl}`;

const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;
const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
  shareMessage
)}`;
const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
  postUrl
)}&description=${encodeURIComponent(shareMessage)}`;
const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(
  postUrl
)}&text=${encodeURIComponent(shareMessage)}`;
</script>

<template>
  <div class="share-post flex items-center gap-3 my-4">
    <h3 class="flex items-center gap-2 font-semibold">
      <Icon icon="mdi:share-variant" class="w-5 h-5" />
      Compartilhar:
    </h3>

    <a
      :href="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-circle btn-soft btn-sm"
      aria-label="Compartilhar no WhatsApp"
    >
      <Icon icon="simple-icons:whatsapp" class="w-4 h-4" />
    </a>

    <a
      :href="twitterUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-circle btn-soft btn-sm"
      aria-label="Compartilhar no X"
    >
      <Icon icon="simple-icons:x" class="w-4 h-4" />
    </a>

    <a
      :href="pinterestUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-circle btn-soft btn-sm"
      aria-label="Compartilhar no Pinterest"
    >
      <Icon icon="simple-icons:pinterest" class="w-5 h-5" />
    </a>

    <a
      :href="telegramUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn-circle btn-sm btn-soft"
      aria-label="Compartilhar no Telegram"
    >
      <Icon icon="simple-icons:telegram" class="w-5 h-5" />
    </a>
  </div>
</template>
