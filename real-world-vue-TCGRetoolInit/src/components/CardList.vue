<template>
  <table class="container px-2">
    <tbody v-if="cards.length >= 3">
      <tr class="row" v-for="(row, rowIndex) in tempArray" :key="rowIndex">
        <td class="col-md-4 mx-2" v-for="(card, i) in row" :key="i">
          <card-list-item :card="card" />
        </td>
      </tr>
    </tbody>
    <tbody v-else>
      <td v-for="(card, i) in cards" :key="i">
        <card-list-item :card="card" />
      </td>
    </tbody>
  </table>
</template>

<script setup>
import CardListItem from '@/components/CardListItem.vue'
import { computed } from 'vue'
const props = defineProps({
  cards: {
    type: Array,
  },
})
const tempArray = computed(() => {
  const result = []
  for (let i = 0; i < props.cards.length; i += 3) {
    const row = props.cards.slice(i, i + 3)
    result.push(row)
  }
  return result
})
</script>
