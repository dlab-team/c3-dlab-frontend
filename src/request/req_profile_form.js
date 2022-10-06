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
/*
function app(){
    const [userData, setUserData]=useState({})
    useEffect(()=={
        const getUserData= async()==(
            if (Object.keys(userData).length === 0 || !userData){
                const resp= await axios.get(`${URL_BASE}/api/1/users/currentuser/`,
                {withCredentials: true})
                setUserData(resp.data.currentUser)
            }
        )
        getUserData()
    },[])
}*/