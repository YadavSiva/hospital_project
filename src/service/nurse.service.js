import { deleteItem, get, save, update } from "./context.service";



//creating variable for user api
const url = "http://localhost:4005/Nurse/";

//create url for delete
const deleteDepartmenturl = "http://localhost:4005/deleteNurse/";

//function for get a registered user
export function getNurse(){
    return get(url);
}

//function for saving user data
export function saveNurse(data){
    return save(url,data);
}

// export function updateNurse(url,data){
//     return update(url,data)
// }

// create a function for delete property type
export function deleteNurse(id){
    return deleteItem(deleteDepartmenturl+id)
}