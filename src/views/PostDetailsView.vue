<template>
    <div class="post-details">
      <section>
        <div class="mx-auto my-2 p-4 bg-white max-w-5xl sm:px-6 lg:px-8 shadow-none md:shadow-lg rounded-none md:rounded-lg">
          <div class="sm:flex sm:items-center sm:justify-between">
            <h3 class="text-lg font-medium leading-6" v-if="!editMode">{{ postDetailed.title }}</h3>
            <div class="w-full" v-if="editMode">
              <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
              <input name="title" id="title" class="text-lg font-medium leading-6 block p-2 shadow border-2 border-indigo-200 outline-none w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" v-model="postDetailed.title" />
            </div>
            <div class="mt-3 flex sm:mt-0 sm:ml-4">
              <button v-if="!editMode" @click="editMode = true" type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Edytować</button>
              <button @click="updatePost()" v-if="editMode" type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Zapisz</button>
              <button @click="deletePost(postDetailed)" type="button" class="ml-3 inline-flex items-center rounded-md border border-transparent bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Usunąć</button>
            </div>
          </div>

          <div class="mt-3 sm:flex sm:items-center sm:justify-between">
            <h3 class="leading-6 text-gray-500" v-if="!editMode">{{ postDetailed.author }}</h3>
            <div class="w-full" v-if="editMode">
              <label for="author" class="block text-sm font-medium text-gray-700">Pen name</label>
              <input name="author" id="author" class="text-lg font-medium leading-6 block p-2 shadow border-2 border-indigo-200 outline-none w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" v-model="postDetailed.author" />
            </div>
            <h3 class="leading-6">{{ formatDate(postDetailed.created_on)}}</h3>
          </div>

          <div class="mx-auto max-w-full mt-5">
            <span v-if="postDetailed != null && !editMode">
              {{postDetailed.content}}
            </span>

            <div class="w-full" v-if="editMode">
              <label for="author" class="block text-sm font-medium text-gray-700">Content</label>
              <textarea name="author" id="author" class="text-lg font-medium leading-6 block p-2 shadow border-2 border-indigo-200 outline-none w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" v-model="postDetailed.content" />
            </div>
          </div>
        </div>

        <div  v-if="!editMode" class="mx-auto my-2 p-4 bg-white max-w-5xl sm:px-6 lg:px-8 shadow-none md:shadow-lg rounded-none md:rounded-lg">
          <div class="sm:flex sm:items-center sm:justify-between">
            <h3 class="text-lg font-medium leading-6">Komentarze</h3>
            <div class="mt-3 flex sm:mt-0 sm:ml-4">
              <button type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="addCommentMode = true" v-if="!addCommentMode">Dodaj komentarz</button>
              <button type="button" class="inline-flex items-center rounded-md border border-gray-300 bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="addComment()" v-if="addCommentMode">Publish komentarz</button>
            </div>
          </div>

          <div class="grid grid-cols-4 gap-2 w-full mt-3" v-if="addCommentMode">
            <textarea class="col-span-1 block p-2 shadow border-2 border-indigo-200 outline-none w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" v-model="newComment.author" />
            <textarea class="col-span-3 w-full block p-2 shadow border-2 border-indigo-200 outline-none w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" v-model="newComment.content" />
          </div>

          <div class="divide-y divide-dashed">
            <app-comment :comment="element" v-for="element in postDetailed.comment" :key="element.id" @delete-event="(id) => deleteCommentFromList(id)" class="px-4 py-5"></app-comment>
          </div>
        </div>
      </section>
    </div>
  </template>
  
<script>
import store from '@/store'
import AppComment from '@/components/AppComment'
import moment from 'moment'

export default {
  name: 'PostDetails',
  components: {
    AppComment
  },
  data() {
    return {
      postDetailed: undefined,
      editMode: false,
      addCommentMode: false,
      newComment: {
        author: '',
        content: '',
        post: null
      }
    }
  },
  methods: {
    formatDate(value){
      return  moment(String(value)).format('DD.MM.YYYY HH:mm')
    },
    getPost(){
      store.dispatch('getPost', this.$route.params.id).then((response) => {
        // console.log('PostDetailsView: ', response)
        this.postDetailed = response
      })
    },
    updatePost(){
      store.dispatch('updatePost', this.postDetailed).then((response) => {
        // console.log('PostDetailsView: ', response)
        this.postDetailed = response
        this.editMode = false
      })
    },
    deletePost(id) {
      store.dispatch('deletePost', id).then(()=>{
        this.$router.push({ name: 'home' })
      })
    },
    addComment(){
      this.newComment.post = this.postDetailed.id
      store.dispatch('addComment', this.newComment).then((response) => {
        this.postDetailed.comment.push(response)
        this.addCommentMode = false
      })
    },
    deleteCommentFromList(id){
      this.postDetailed.comment.splice(this.postDetailed.comment.map(item => item.id).indexOf(id), 1)
    }
  },
  beforeMount() {
    this.getPost()
  }
}
</script>