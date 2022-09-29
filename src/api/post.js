import axios from "@/api/axios";
// const post = credentionals =>{
//     return axios.post('/posts', {credentionals})
// }
const posts = () =>{
    return axios.get('/posts/')
}

export default {
    posts
}