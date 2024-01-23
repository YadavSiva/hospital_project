import { deleteItem, get, save, update } from "./context.service";



//creating variable for user api
const url = "http://localhost:4005/adminPatient/";

// create url for delete
const deletepatienturl = "http://localhost:4005/deletePatient/"

//function for get a registered user
export function getPatient(){
    return get(url);
}

//function for saving user data
export function savePatient(data){
    return save(url,data);
}

export function updatepatient(url,data){
    return update(url,data)
}

// create a function for delete property type
export function deletepatient(id){
    return deleteItem(deletepatienturl+id)
}