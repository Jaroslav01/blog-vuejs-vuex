<template>
  <div class="home">
    <section>
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 space-y-4 my-4">
        <Post :post="item" v-for="item in store.state.post.postGroup" :key="item.id" class="px-4 py-5"></Post>
      </div>
    </section>
  </div>
</template>

<script setup>
import Post from "@/components/Post.vue";
import store from '@/store/index.js';

</script>
