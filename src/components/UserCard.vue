<template>
  <div class="card" @click="$emit('click')">
    <div class="card-layout">
      <img :src="avatarUrl" alt="avatar" class="card-avatar" />
      <div class="card-content">
        <h2 class="card-title">{{ title }}</h2>
        <a class="card-email" href="mailto:example@example.com">{{ email }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
interface Props {
  title: string;
  email: string;
  id: number;
}

const props = defineProps<Props>();
const avatarUrl = `https://i.pravatar.cc/150?img=${props.id}`;
</script>

<style scoped>
.card {
  padding: 35px 56px;
  border: 1px solid #c0c0cc;
  border-radius: 18px;
  color: #00071f;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
}

.card-layout {
  display: flex;
  gap: 48px;
}

.card-avatar {
  width: 179px;
  height: 179px;
  border-radius: 50%;
  object-fit: cover;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-title {
  margin: 0;
  font-size: 6.8em;
}

.card-email {
  color: inherit;
  margin: 0;
  font-size: 4.2em;
  text-decoration: underline;
}

@media (max-width: 900px) {
  .card {
    padding: 25px 46px;
  }

  .card-layout {
    gap: 38px;
  }
  .card-title {
    font-size: 4em;
  }

  .card-email {
    font-size: 2.5em;
  }

  .card-avatar {
    width: 130px;
    height: 130px;
  }
}

@media (max-width: 650px) {
  .card {
    padding: 15px 26px;
  }
  .card-layout {
    gap: 20px;
  }
  .card-title {
    font-size: 3em;
  }

  .card-email {
    font-size: 1.9em;
  }

  .card-avatar {
    width: 100px;
    height: 100px;
  }
}
@media (max-width: 500px) {
  .card {
    padding: 10px 16px;
  }
  .card-layout {
    gap: 15px;
  }
  .card-title {
    font-size: 2.5em;
  }

  .card-email {
    font-size: 1.4em;
  }

  .card-avatar {
    width: 80px;
    height: 80px;
  }
}
</style>
