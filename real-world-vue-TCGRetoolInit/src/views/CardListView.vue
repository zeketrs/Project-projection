<template>
  <div v-if="cards">
    <card-list :cards="cards" />
  </div>
  <div class="loading" v-else>
    <img v-show="true" class="loading" src="../assets/images/Loading.jpg" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CardService from '@/services/CardService.js'
import CardList from '@/components/CardList.vue'
const cards = ref(null)

onMounted(() => {
  CardService.getCards()
    .then((response) => {
      cards.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>
