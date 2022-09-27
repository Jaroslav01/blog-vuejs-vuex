<template>
  <div class="min-w-max min-h-screen bg-slate-100">
    <nav>
      <app-nav/>
    </nav>
    <router-view/>

    <AppNotification></AppNotification>
    <NewPostModal></NewPostModal>
  </div>
</template>

<script>
  // @ is an alias to /src
  import AppNav from '@/components/AppNav.vue';
  import AppNotification from '@/components/AppNotification.vue';
  import NewPostModal from '@/components/NewPostModal.vue';

  export default {
    name: 'HomeView',
    components: {
      AppNav,
      AppNotification,
      NewPostModal,
    },
    computed: {

    },

  }
</script>

<style>

</style>
