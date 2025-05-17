import {GM,GN} from './Message.action'
let sl={
    msg:"Hello mr"
}
let messageReducer = (state=sl,action)=>{
console.log("Inside Reducer")
console.log(action.type)
switch(action.type){
    case GM:
        return {msg:"Good Morning"}
    case GN:
        return {msg:"Good Night"}
    default:
        return state
}   
}
export {messageReducer}