import axios from "@/api/axios";

const getComments = () =>{
    return axios.get('/comment/')
}

const getComment = id =>{
    return axios.get('/comment/' + id + '/' )
}

const updateComment = comment =>{
    return axios.put('/comment/' + comment.id + '/', comment)
}

const deleteComment = id =>{
    return axios.delete('/comment/' + id + '/' )
}

const addComment = comment =>{
    return axios.post('/comment/', comment)
}


export default {
    getComments,
    getComment,
    updateComment,
    deleteComment,
    addComment,
}