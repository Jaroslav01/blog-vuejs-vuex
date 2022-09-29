import commentApi from '@/api/comment'
export default {
    state: () => ({
    }),
    mutations: {
    },
    actions: {
        getComments(context) {
            return new Promise(() => {
                commentApi.getComments().then((response) => {
                    context.commit('setPostGroup', response.data)
                })
                    .catch(reason => {
                        context.commit('setNotificationText', reason.message)
                        context.commit('setNotificationType', 'Error')
                        context.commit('showNotification')
                    })
            })
        },
        getComment(context, id) {
            return new Promise((resolve) => {
                commentApi.getComment(id).then((response) => {
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
        updateComment(context, comment) {
            return new Promise((resolve) => {
                commentApi.updateComment(comment).then((response) => {
                    context.dispatch('getPosts')
                    context.commit('setNotificationText', 'Updated comment #: ' + comment.id)
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
        deleteComment(context, comment) {
            return new Promise((resolve) => {
                commentApi.deleteComment(comment.id).then((response) => {
                    context.dispatch('getPosts')
                    context.commit('setNotificationText', 'Removed comment: ' + comment.content)
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
        addComment(context, comment) {
            return new Promise((resolve) => {
                commentApi.addComment(comment).then((response) => {
                    context.commit('setNotificationText', 'Comment added by id: ' + response.data.id)
                    context.commit('setNotificationType', 'Successfully')
                    context.commit('showNotification')
                    context.dispatch('getPosts')
                    resolve(response.data)
                })
                    .catch(() => {
                        context.commit('setNotificationText', 'Pole nie może być puste')
                        context.commit('setNotificationType', 'Error')
                        context.commit('showNotification')
                    })
            })
        }
    },
    getters: {

    }
}
