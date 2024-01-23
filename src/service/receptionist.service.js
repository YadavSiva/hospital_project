import { deleteItem, get, save, update } from "./context.service";



//creating variable for user api
const url = "http://localhost:4005/adminRecetionist/";

// create url for delete
const deleteReceptionisturl = "http://localhost:4005/deleteRecetionist/";

//function for get a registered user
export function getReceptionist(){
    return get(url);
}

//function for saving user data
export function saveReceptionist(data){
    return save(url,data);
}

export function updateReceptionist(url,data){
    return update(url,data)
}

// create a function for delete property type
export function deleteReceptionist(id){
    return deleteItem(deleteReceptionisturl+id)
}