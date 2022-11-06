import axios from "axios"

export function post_add_user (url, values){
  console.log(values);
    axios({
        method: 'PUT', 
        url: url,
        data: values
      });
    
}