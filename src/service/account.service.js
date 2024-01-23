import { get, save } from "./context.service";

//creating variable for user api
const url = "http://localhost:4005/adminAccount/";


//function for get a registered user
export function getaccount(){
    return get(url);
}

//function for saving user data
export function saveaccount(data){
    return save(url,data);
}