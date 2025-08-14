<template>
  <div class="home">
    <div class="card-list">
      <UserCard
        v-for="user in users"
        :key="user.id"
        :title="user.name"
        :email="user.email"
        :id="user.id"
        @click="goToUser(user.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { type User } from '../api/types';
import { fetchAllUsers } from '../api/usersApi';
import UserCard from '../components/UserCard.vue';

const router = useRouter();
const users = ref<User[]>([]);

const goToUser = (id: number) => {
  router.push({ name: 'user', params: { id } });
};

onMounted(async () => {
  try {
    const resp = await fetchAllUsers();
    users.value = Array.isArray(resp) ? resp : [];
  } catch (e) {
    console.error('Произошла ошибка', e);
    users.value = [];
  }
});
</script>

<style scoped>
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-size: 10px;
}

.card-list {
  padding: 0 3.7vw;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 49px;
}
@media (max-width: 800px) {
  .card-list {
    gap: 10px;
    margin-bottom: 30px;
  }
}
</style>
