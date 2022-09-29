<template>
  <div class="min-w-max min-h-screen bg-slate-100 h-screen">
    <div class="flex flex-col justify-between h-screen">
      <div>
        <app-nav/>

        <router-view/>
      </div>

      <app-footer></app-footer>
    </div>

    <!-- Notification, Dialog components-->
    <AppNotification></AppNotification>
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
