<template>
  <div class="review-form">
  <form @submit.prevent="AddItemAndClear(comment)">
      <div class="row">
        <textarea v-model="comment" rows = "5"></textarea>
      </div>
      <div class="row">
      <button class="btn btn-success">Add to Deck</button>
    </div>
    </form>
</div>
</template>

<script setup>
import  { ref } from 'vue'
import { useCommentsStore } from '@/stores/CommentsStore.js'

const comment = ref('')
const store = useCommentsStore()

function AddItemAndClear(item){
  if (item.length === 0)
{return}
store.submitComment(item)
comment.value = ''
}

// const emit = defineEmits([ 'submit'])

// function submitComment() {
//   emit('submit')
// }



</script>
