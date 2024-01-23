import { get, save } from "./context.service";

//creating variable for user api
const url = "http://localhost:4005/AccountPassword/";


//function for get a registered user
export function getaccountpassword(){
    return get(url);
}

//function for saving user data
export function saveaccountpassword(data){
    return save(url,data);
}