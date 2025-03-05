<template>
  <div v-if="deckList.length > 0">
    <card-list :cards="deckList" />
    <commentary-form>

</commentary-form>
  </div>
  <div v-else-if="deckList.length == 0">
    <h4>
      <router-link :to="{ name: 'card-list' }"> This deck doesn't have cards yet. </router-link>
    </h4>
  </div>
  <div class="loading" v-else>
    <img v-show="true" class="loading" src="../assets/images/Loading.jpg" />
  </div>
</template>

 <!-- <div>

</div>  -->


<script setup>
import { storeToRefs } from 'pinia'
import { useDeckListStore } from '@/stores/DeckList.js'
import CardList from '@/components/CardList.vue'
import CommentaryForm from '@/components/CommentaryForm.vue'

const store = useDeckListStore()
const { deckList } = storeToRefs(store)
</script>

<style lang="css" scoped>
h4 a {
  font-weight: bold;
  color: #aac9e7;
  text-decoration: none;
}
</style>
