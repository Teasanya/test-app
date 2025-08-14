<template>
  <header id="header">
    <h1 class="header__title">{{ title }}</h1>
  </header>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<style>
#header {
  background-color: #8ec0c6;
  color: #1a283e;
  padding: 30px 10px;
  margin-bottom: 47px;
}

.header__title {
  margin: 0;
  font-size: 9.6em;
  line-height: 1.1;
}

@media (max-width: 800px) {
  #header {
    margin-bottom: 30px;
  }
}
</style>
