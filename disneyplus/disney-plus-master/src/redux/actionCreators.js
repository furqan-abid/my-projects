import * as ActionTypes from './ActionTypes';
import db from './firebase';

export const fetchmovies=()=>(dispatch)=>{
    dispatch(moviesLoading(true))
    db.collection("Movies").onSnapshot((snapshot)=>{
        let data=snapshot.docs.map((doc)=>{
            return {id:doc.id,...doc.data()}
        })
        dispatch(addmovies(data))
    })
}
export const addmovies=(movies)=>({
    type:ActionTypes.ADD_MOVIES,
    payload: movies
})

export const moviesLoading=()=>({
    type: ActionTypes.MOVIES_LOADING
})

export const moviesFailed=(errmess)=>({
    type:ActionTypes.MOVIES_FAILED,
    payload: errmess
})


export const userLogin=(name,email,photo)=>({
    type:ActionTypes.USER_LOGIN,
    payload:{
        name:name,
        email:email,
        photo:photo
    }
})

export const userSignout=()=>({
    type:ActionTypes.USER_SIGNOUT
})