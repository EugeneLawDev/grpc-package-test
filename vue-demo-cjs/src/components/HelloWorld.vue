<script setup>
import { testing } from "@snsoft/bundle-test";

defineProps({
  msg: {
    type: String,
    required: true
  }
})

  const demo = () => {
    testing();
  };
</script>

<template>
  <button @click="demo">Click me</button>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
