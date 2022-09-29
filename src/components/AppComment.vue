<template>
  <div class="bg-white sm:px-6 flex flex-col justify-between">
    <div class="flex flex-row justify-between items-start content-center gap-2">
      <div class="grid grid-cols-4 gap-2 w-full">
        <div class="col-span-1 text-gray-500 font-medium break-words" v-if="!editMode">{{commentEditable.author}}:</div>
        <textarea class="col-span-1 block p-2 shadow border-2 border-indigo-200 outline-none w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" v-if="editMode" v-model="commentEditable.author" />
        <div class="col-span-3 break-words" v-if="!editMode">{{commentEditable.content}}</div>
        <textarea class="col-span-3 w-full block p-2 shadow border-2 border-indigo-200 outline-none w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" v-if="editMode" v-model="commentEditable.content" />
      </div>

      <div class="flex flex-row justify-between gap-2">
        <button @click="editMode = true" v-if="!editMode" type="button" class="inline-flex items-center rounded border border-transparent bg-indigo-100 px-2.5 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Edytować</button>
        <button @click="updateComment()" v-if="editMode" type="button" class="inline-flex items-center rounded border border-transparent bg-indigo-100 px-2.5 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Zapisz</button>
        <button @click="deleteComment()" type="button" class="inline-flex items-center rounded border border-transparent bg-pink-600 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Usunąć</button>
      </div>
    </div>

    <div v-if="!editMode" class="flex flex-row">
      <span class="text-gray-500 font-medium break-words">{{formatDate(commentEditable.created_on)}}</span>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import moment from "moment/moment";

export default {
  name: 'AppComment',
  props: {
    comment: {}
  },
  data() {
    return {
      commentEditable: this.comment,
      editMode: false
    }
  },
  methods: {
    formatDate(value){
      return  moment(String(value)).format('DD.MM.YYYY HH:mm')
    },
    updateComment(){
      store.dispatch('updateComment', this.commentEditable).then((response) => {
        this.commentEditable = response
        this.editMode = false
        this.$emit("onUpdated")
      })
    },
    deleteComment() {
      store.dispatch('deleteComment', this.commentEditable).then(()=>{
        this.$emit("deleteEvent", this.commentEditable.id)
      })
    }
  }
}
</script>
