import axios from "@/api/axios";

const getPosts = () =>{
    return axios.get('/posts/')
}

const getPost = id =>{
    return axios.get('/posts/' + id + '/' )
}

const updatePost = post =>{
    return axios.put('/posts/' + post.id + '/', post)
}

const deletePost = id =>{
    return axios.delete('/posts/' + id + '/' )
}

const addPost = post =>{
    return axios.post('/posts/', post)
}


export default {
    getPosts,
    getPost,
    updatePost,
    deletePost,
    addPost,
}