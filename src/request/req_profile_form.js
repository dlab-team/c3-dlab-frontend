import axios from "axios"

export async function req_profile_form (url){
    try {
        const response = await axios.get(url)
        const { data } = response 
        const { res } = data
        return res
    } catch (error) {
       console.log(error)  
    }
   
}