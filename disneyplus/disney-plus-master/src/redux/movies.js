import * as ActionTypes from './ActionTypes';

export const Movies=(state={
    isloading:true,
    errmess:false,
    movies:[]
},
action)=>{
    switch(action.type){
        case ActionTypes.MOVIES_LOADING:
            return {...state,isloading:true,errmess:false,movies:[]}
        case ActionTypes.ADD_MOVIES:
            return {...state,isloading:false,errmess:false,movies:action.payload}
        case ActionTypes.MOVIES_FAILED:
            return {...state,isloading:false,errmess:action.payload,movies:[]}
        default:
            return state;
    }
}