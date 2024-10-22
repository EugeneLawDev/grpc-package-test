<script setup lang="ts">
import { ref } from "vue";
import { testing } from "@snsoft/bundle-test";

defineProps<{ msg: string }>();

const count = ref(0);

const demo = () => {
  testing();
};
</script>

<template>
  <button @click="demo">Click me</button>
</template>
