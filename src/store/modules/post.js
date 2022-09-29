import postApi from '@/api/post'
export default {
    state: () => ({
        postGroup: []
    }),
    mutations: {
        setPostGroup(state, postGroup){
            state.postGroup = postGroup
        }
    },
    actions: {
        getPosts(context) {
            return new Promise(() => {
                postApi.posts().then((response) => {
                    console.log('getPosts: ', response)
                    context.commit('setPostGroup', response.data)
                })
                    .catch(reason => {
                        context.commit('setNotificationText', reason)
                        context.commit('setNotificationType', 'Error')
                        context.commit('showNotification')
                    })
            })
        }
    },
    getters: {

    }
}
