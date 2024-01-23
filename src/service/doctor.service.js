import { deleteItem, get, save } from "./context.service";



//creating variable for user api
const url = "http://localhost:4005/adminDoctors/";

// create url for delete
const deleteDoctorurl = "http://localhost:4005/deleteDoctor/";

//function for get a registered user
export function getDoctor(){
    return get(url);
}

//function for saving user data
export function saveDoctor(data){
    return save(url,data);
}
// create a function for delete property type
export function deleteDoctor(id){
    return deleteItem(deleteDoctorurl+id);
}