import { defineStore } from 'pinia'

export const useCommentsStore = defineStore('commentList', {
  state: () => ({

    commentList: [],
  }),
  actions: {
    submitComment(comment){
    this.commentList.push(comment)
   }
},
})
