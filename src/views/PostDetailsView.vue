<template>
    <div class="post-details">
      <section>
        <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Post post = "LOREM"/>
        </div>
      </section>
    </div>
  </template>
  
  <script>
import Post from '@/components/Post.vue';
  // @ is an alias to /src
  
  export default {
    name: 'PostDetails',
    components: {
    Post
},
    data() {
      return {
        items: [
        { id: 1 },
        { id: 2 },
        { id: 2 },
        ]
      }
    }
  }
  </script>
  