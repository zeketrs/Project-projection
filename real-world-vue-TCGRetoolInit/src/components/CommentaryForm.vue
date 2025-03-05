<template>
  <form>
      <textarea></textarea>
      <button @click="store.submitComment(data.comment)" class="btn btn-success">Add to Deck</button>
  </form>
</template>

<script setup>
import { useCommentsStore } from '@/stores/CommentsStore.js'

const store = useCommentsStore()
// const emit = defineEmits([ 'submit'])

// function submitComment() {
//   emit('submit')
// }



</script>
