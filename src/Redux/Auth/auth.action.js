import axios from "axios"
import { API_BASE_URL } from "../../config/api"


export const loginUserAction=(loginData)=>async(dispatch)=>{
    dispatch({type:"LOGIN_REQUEST"})
    try {
        const {data}=await axios.post('${API_BASE_URL}/auth/signin',loginData.data)
        
        if(data.jwt){
            localStorage.setItem("jwt",data.jwt)
            
        }
        console.log("login success",data)
        dispatch({type:"LOGIN_SUCCESS",payload:data.jwt})
    } catch (error) {
        console.log("------------")
        dispatch({type:"LOGIN_FAILURE",payload:error})
    }

}


export const registerUserAction=(loginData)=>async(dispatch)=>{
    dispatch({type:"LOGIN_REQUEST"})
    try {
        const {data}=await axios.post('${API_BASE_URL}/auth/signup',loginData.data)
        
        if(data.jwt){
            localStorage.setItem("jwt",data.jwt)
            
        }
        console.log("register success",data)
        dispatch({type:"LOGIN_SUCCESS",payload:data.jwt})
    } catch (error) {
        console.log("------------")
        dispatch({type:"LOGIN_FAILURE",payload:error})
    }

}