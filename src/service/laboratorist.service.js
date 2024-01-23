import { deleteItem, get, save, update } from "./context.service";



//creating variable for user api
const url = "http://localhost:4005/adminLaboratorist/";

// create url for delete
const deletelaboratoristurl = "http://localhost:4005/deleteLaboratorist/"

//function for get a registered user
export function getlaboratorist(){
    return get(url);
}

//function for saving user data
export function savelaboratorist(data){
    return save(url,data);
}

export function updatelaboratorist(url,data){
    return update(url,data)
}

// create a function for delete property type
export function deletelaboratorist(id){
    return deleteItem(deletelaboratoristurl+id)
}