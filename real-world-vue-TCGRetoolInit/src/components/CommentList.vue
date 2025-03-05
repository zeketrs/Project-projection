<script setup>
import { useCommentsStore } from '@/stores/CommentsStore';
import { storeToRefs } from 'pinia';

const store = useCommentsStore()
const { commentList } = storeToRefs(store)

</script>

<template>
  <div class="review-container">
  <div v-for="comment in commentList" :key="comment.id">
    <span> {{ comment }}</span>
  </div>
</div>
</template>


<style scoped>
</style>
