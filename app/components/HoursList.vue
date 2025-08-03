<script setup lang="ts">
import hoursJson from "~/data/hours.json";

interface HourData {
  hour: string;
  description: string;
}

const hoursData: HourData[] = Object.entries(hoursJson).map(([hour, description]) => ({
  hour,
  description,
}));
</script>

<template>
  <div class="flex flex-wrap gap-3">
    <NuxtLink
      v-for="item in hoursData"
      :to="`/hora/${item.hour}`"
      :key="item.hour"
      class="btn btn-soft btn-primary"
    >
      {{ item.hour }}
    </NuxtLink>
  </div>
</template>