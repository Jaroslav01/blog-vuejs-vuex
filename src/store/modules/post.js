import postApi from '@/api/post'
export default {
    state: () => ({
        postGroup: [],
        postDetailed: {},
    }),
    mutations: {
        setPostGroup(state, postGroup){
            state.postGroup = postGroup
        },
        setPostDetailed(state, postDetailed){
            state.postDetailed = postDetailed
        },
    },
    actions: {
        getPosts(context) {
            return new Promise(() => {
                postApi.getPosts().then((response) => {
                    context.commit('setPostGroup', response.data)
                })
                    .catch(reason => {
                        context.commit('setNotificationText', reason.message)
                        context.commit('setNotificationType', 'Error')
                        context.commit('showNotification')
                    })
            })
        },
        getPost(context, id) {
            return new Promise((resolve) => {
                postApi.getPost(id).then((response) => {
                    context.commit('setPostDetailed', response.data)
                    resolve(response.data)
                })
                    .catch(reason => {
                        context.commit('setNotificationText', reason.message)
                        context.commit('setNotificationType', 'Error')
                        context.commit('showNotification')
                        window.location.replace('/page-not-found')
                    })
            })
        },
        updatePost(context, post) {
            return new Promise((resolve) => {
                postApi.updatePost(post).then((response) => {
                    context.dispatch('getPosts')
                    context.commit('setNotificationText', 'Updated post #: ' + post.id)
                    context.commit('setNotificationType', 'Successfully')
                    context.commit('showNotification')
                    resolve(response.data)
                })
                    .catch(reason => {
                        context.commit('setNotificationText', reason.message)
                        context.commit('setNotificationType', 'Error')
                        context.commit('showNotification')
                    })
            })
        },
        deletePost(context, post) {
            return new Promise((resolve) => {
                postApi.deletePost(post.id).then((response) => {
                    context.dispatch('getPosts')
                    context.commit('setNotificationText', 'Removed post: ' + post.title)
                    context.commit('setNotificationType', 'Successfully')
                    context.commit('showNotification')
                    resolve(response.data)
                })
                    .catch(reason => {
                        context.commit('setNotificationText', reason.message)
                        context.commit('setNotificationType', 'Error')
                        context.commit('showNotification')
                    })
            })
        },
        addPost(context, post) {
            return new Promise((resolve) => {
                postApi.addPost(post).then((response) => {
                    context.commit('setNotificationText', 'Created by id: ' + response.data.id)
                    context.commit('setNotificationType', 'Successfully')
                    context.commit('showNotification')
                    context.dispatch('getPosts')
                    resolve(response.data)
                })
                    .catch(reason => {
                        context.commit('setNotificationText', reason.message)
                        context.commit('setNotificationType', 'Error')
                        context.commit('showNotification')
                    })
            })
        }
    },
    getters: {

    }
}
