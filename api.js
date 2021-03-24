import axios from "axios";

export function GetUserData(){
    return axios.get(`https://605ada1327f0050017c05539.mockapi.io/ex`)
}

export function PostUserData(data){
    return axios.post(`https://605ada1327f0050017c05539.mockapi.io/ex`,data)
}

