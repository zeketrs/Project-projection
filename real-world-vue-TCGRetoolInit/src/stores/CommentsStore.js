import { defineStore } from 'pinia'

export const useCommentsStore = defineStore('commentList', {
  state: () => ({

    commentList: [],
    id: 0,
  }),
  actions: {
    submitComment(comment){
    this.commentList.push(comment)
    this.id++
   }
},
})
