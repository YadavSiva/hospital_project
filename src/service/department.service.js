import { deleteItem, get, save, update } from "./context.service";


//creating variable for user api
const url = "http://localhost:4005/getdepartment/";

// create url for delete
const deleteDepartmenturl = "http://localhost:4005/deleteDepartment/"

//function for get a registered user
export function getDepartment(){
    return get(url);
}

//function for saving user data
export function saveDepartment(data){
    return save(url,data);
}

export function updateDepartment(url,data){
    return update(url,data)
}

// create a function for delete property type
export function deleteDepartment(id){
    return deleteItem(deleteDepartmenturl+id)
}