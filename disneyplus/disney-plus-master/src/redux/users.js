import * as ActionTypes from './ActionTypes';

export const Users=(state={
    name: "",
    email: "",
    photo: ""
},
action)=>{
    switch (action.type) {
        case ActionTypes.USER_LOGIN:
            return{...state,name:action.payload.name,email:action.payload.email,photo:action.payload.photo}
        case ActionTypes.USER_SIGNOUT:
            return{...state,name:null,email:null,photo:null}
        default:
            return state;
    }
}