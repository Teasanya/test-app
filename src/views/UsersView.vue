<template>
  <div class="user-details">
    <div v-if="loading">Загрузка...</div>
    <div v-else-if="user">
      <div class="user-container">
        <div class="user-info">
          <img
            :src="`https://i.pravatar.cc/300?img=${user.id}`"
            alt="User avatar"
            class="user-avatar"
          />
          <h1 class="user-name">{{ user.name }}</h1>
        </div>

        <div class="user-section">
          <h2>Contact Information</h2>

          <p>
            Email:<a href="mailto:example@example.com"> {{ user.email }}</a>
          </p>
          <p>Phone: {{ user.phone }}</p>
          <p>
            Website:
            <a :href="`http://${user.website}`">{{ user.website }}</a>
          </p>
        </div>

        <div class="user-section">
          <h2>Address</h2>
          <p>Street: {{ user.address.street }}</p>
          <p>City: {{ user.address.city }}</p>
          <p>Suite: {{ user.address.suite }}</p>
          <p>Zipcode: {{ user.address.zipcode }}</p>
        </div>

        <div class="user-section">
          <h2>Company</h2>
          <p>Name: {{ user.company.name }}</p>
          <p>CatchPhrase: {{ user.company.catchPhrase }}</p>
          <p>BS: {{ user.company.bs }}</p>
        </div>
      </div>
    </div>
    <div v-else>Пользователь не найден</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import type { User } from '../api/types';
import { fetchUserById } from '../api/usersApi';

const route = useRoute();
const user = ref<User | null>(null);
const loading = ref(true);

onMounted(async () => {
  try {
    const userId = Number(route.params.id);
    user.value = await fetchUserById(userId);
  } catch (error) {
    console.error('Ошибка загрузки пользователя:', error);
  } finally {
    loading.value = false;
  }
});
</script>

<style>
.user-details {
  flex: 1;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  padding: 0 87px;
  font-size: 2.4rem;
  color: #00071f;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 42px;
  margin-bottom: 51px;
}

.user-name {
  font-size: 4.2rem;
  font-weight: 400;
}

.user-section h2 {
  margin: 0;
  font-size: 4.2rem;
  margin-bottom: 25px;
  font-weight: 400;
}

.user-section a {
  color: inherit;
  text-decoration: underline;
}

.user-avatar {
  width: 252px;
  height: 245px;
  border-radius: 50%;
  object-fit: cover;
}

@media (max-width: 800px) {
  .user-details {
    padding: 0 50px;
    font-size: 2rem;
  }

  .user-info {
    gap: 20px;
    margin-bottom: 30px;
  }
  .user-name {
    font-size: 3.5rem;
  }

  .user-section h2 {
    font-size: 3.5rem;
    margin-bottom: 20px;
  }

  .user-avatar {
    width: 180px;
    height: 180px;
  }
}
</style>
