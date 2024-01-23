import { deleteItem, get, save, update } from "./context.service";


//creating variable for user api
const url = "http://localhost:4005/adminAccountant/";

// create url for delete
const deleteaccountanturl = "http://localhost:4005/deleteAccountant/";

//function for get a registered user
export function getaccountant(){
    return get(url);
}

//function for saving user data
export function saveaccountant(data){
    return save(url,data);
}

export function updateaccountant(url,data){
    return update(url,data)
}

// create a function for delete property type
export function deleteaccountant(id){
    return deleteItem(deleteaccountanturl+id)
}