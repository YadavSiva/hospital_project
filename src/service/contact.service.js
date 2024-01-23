import { get, save } from "./context.service";


//creating variable for user api
const url = "http://localhost:4005/getcontact/";

//function for get a registered user
export function getContact(){
    return get(url);
}

//function for saving user data
export function saveContact(data){
    return save(url,data);
}