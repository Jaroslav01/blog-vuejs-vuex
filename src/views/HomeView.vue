<template>
  <div class="home">
    <section class="min-h-full">
      <div class="mx-auto max-w-4xl sm:px-6 lg:px-8 space-y-4 my-4 min-h-full">
        <div class="flex flex-col justify-center items-center content-center min-h-full bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8 md:rounded-2xl shadow-md" v-if="store.state.post.postGroup.length === 0">
          <div class="mx-auto max-w-max">
            <main class="sm:flex">
              <div class="">
                <div class="">
                  <h1 class="text-4xl font-bold tracking-tight text-indigo-500 sm:text-5xl">Nie znaleziono artykułów</h1>
                </div>
                <div class="mt-10 flex justify-center space-x-3 sm:border-l sm:border-transparent">
                  <button class="inline-flex items-center rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="store.commit('showNewPostModal')">Pisać artykuł</button>
                </div>
              </div>
            </main>
          </div>
        </div>
        <Post :post="item" v-for="item in store.state.post.postGroup" :key="item.id" class="px-4 py-5"></Post>
      </div>
    </section>
  </div>
</template>

<script setup>
import Post from "@/components/Post.vue";
import store from '@/store/index.js';
store.dispatch('getPosts')
// console.log('Home: ', store.state.post.postGroup)
</script>
