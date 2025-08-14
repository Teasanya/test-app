<template>
  <Header :title="currentTitle" />
  <router-view></router-view>
  <Footer />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const route = useRoute();
const currentTitle = computed(() => (route.meta.title as string) || '');
</script>
