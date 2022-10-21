import axios from "axios"

export function post_add_user (url){
    try {
        const post = axios.post(url)
        console.log(post)
        return post
    } catch (error) {
       console.log(error)  
    }
   
}