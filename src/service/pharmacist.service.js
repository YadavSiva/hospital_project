import { deleteItem, get, save, update } from "./context.service";



//creating variable for user api
const url = "http://localhost:4005/adminPharmacist/";

// create url for delete
const deletepharmacisturl = "http://localhost:4005/deletePharmacist/"

//function for get a registered user
export function getPharmacist(){
    return get(url);
}



export function updatePharmacist(url,data){
    return update(url,data)
}

// create a function for delete property type
export function deletePharmacist(id){
    return deleteItem(deletepharmacisturl+id)
}