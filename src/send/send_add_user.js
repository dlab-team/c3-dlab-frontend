import axios from "axios"

export function post_add_user (url, values){
    axios({
        method: 'post',
        url: url,
        data: values
      });
    
}