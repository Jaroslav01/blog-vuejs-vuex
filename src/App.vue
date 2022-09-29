<template>
  <div class="w-screen max-w-screen min-h-screen bg-slate-100 h-screen">
    <div class="flex flex-col justify-between h-screen">
      <div class="md:min-h-full">
        <app-nav/>

        <router-view/>
      </div>

      <app-footer class="mt-5"></app-footer>
    </div>

    <!-- Notification, Dialog components-->
    <AppNotification class="z-[1000]"></AppNotification>
    <NewPostModal></NewPostModal>
  </div>
</template>

<script>
  // @ is an alias to /src
  import AppNav from '@/components/AppNav.vue';
  import AppNotification from '@/components/AppNotification.vue';
  import NewPostModal from '@/components/NewPostModal.vue';
  import AppFooter from '@/components/AppFooter.vue';

  export default {
    name: 'HomeView',
    components: {
      AppNav,
      AppNotification,
      NewPostModal,
      AppFooter,
    },
    computed: {

    },

  }
</script>

<style>

</style>
