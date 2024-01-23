import { deleteItem, get, save, update } from "./context.service";



//creating variable for user api
const url = "http://localhost:4005/notice/";

//create url for delete
const deleteNoticeBoardurl = "http://localhost:4005/deletenotice/";

//function for get a registered user
export function getNoticeBoard(){
    return get(url);
}

//function for saving user data
export function saveNoticeBoard(data){
    return save(url,data);
}

export function updateNoticeBoard(url,data){
    return update(url,data)
}

// create a function for delete property type
export function deleteNoticeBoard(id){
    return deleteItem(deleteNoticeBoardurl+id)
}