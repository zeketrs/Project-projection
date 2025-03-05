<template>
  <div>
    <router-link class="card-details-link" :to="{ name: 'card-details', params: { id: card.id } }">
      <strong>{{ card.name }}</strong>
      <div class="display-card">
        <img v-bind:src="card.image" />
      </div>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  card: {
    type: Object,
  },
})
</script>

<style scoped>
div a {
  text-decoration: none;
}
.display-card img {
  width: 150px;
  height: auto;
}
.display-card:hover {
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  transform: scale(1.1);
}
</style>
