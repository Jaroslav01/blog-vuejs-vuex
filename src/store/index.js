import { createStore } from 'vuex'
import post from '@/store/modules/post'

export default createStore({
  state: {
    isNotification: false,
    isNewPostModal: false,
  },
  getters: {
  },
  mutations: {
    showNotification (state) {
      state.isNotification = true
    },
    hideNotification (state) {
      state.isNotification = false
    },
    showNewPostModal (state) {
      state.isNewPostModal = true
    },
    hideNewPostModal (state) {
      state.isNewPostModal = false
    }
  },
  actions: {
  },
  modules: {
    post: post
  }
})
