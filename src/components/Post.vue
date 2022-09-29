<template>
  <div class="bg-white sm:px-6 rounded shadow-md">
    <div class="flex space-x-3">
      <div class="min-w-0 flex-1">
        <p class="text-sm font-medium text-gray-900">
          <a class="hover:underline uppercase">{{ post.title }}</a>
        </p>
        <p class="text-sm text-gray-500">
          <a class="hover:underline">{{ post.created_on }}</a>
        </p>
      </div>
      <div class="flex flex-shrink-0 self-center">
        <button @click="this.$router.push({name: 'post-details', params: { id: post.id}})" type="button" class="inline-flex items-center rounded border border-transparent bg-indigo-100 px-2.5 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
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
  </script>

  