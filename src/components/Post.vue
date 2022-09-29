<template>
  <div class="bg-white sm:px-6 rounded shadow-md">
    <div class="flex space-x-3">
<!--      <div class="flex-shrink-0">-->
<!--        <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />-->
<!--      </div>-->
      <div class="min-w-0 flex-1">
        <p class="text-sm font-medium text-gray-900">
          <a class="hover:underline uppercase">{{ post.title }}</a>
        </p>
        <p class="text-sm text-gray-500">
          <a class="hover:underline">{{ post.created_on }}</a>
        </p>
      </div>
      <div class="flex flex-shrink-0 self-center">
        <button type="button" class="inline-flex items-center rounded border border-transparent bg-indigo-100 px-2.5 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Więcej szczegółów
        </button>
      </div>
    </div>

    <div class="mt-5 p-4">
      {{post.content}}
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'AppPost',
    props: {
      post: {}
    },
  }
  // console.log('PostComponent: ', this.post)
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  