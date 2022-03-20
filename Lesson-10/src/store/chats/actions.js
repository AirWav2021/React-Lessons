export const ADD_CHAT = "CHAT::ADD_CHAT";
export const DELETE_CHAT = "CHAT::DELETE_CHAT";

export const deleteChat =(id)=>({
   type:DELETE_CHAT,
   payload: id
})

export const addChat =(id,name)=>({
type:ADD_CHAT,
payload:{
    id,
    name
}
})
