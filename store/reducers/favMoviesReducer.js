import { TOGGLE_FAVORITE } from "../actions/favMoviesActions";


const initialState={
    favMovies:[]
};


//gestion de state logique here
const favMoviesReducer =(state= initialState,action)=>{
    switch(action.type){
        case TOGGLE_FAVORITE:
            const index = state.favMovies.findIndex(movie=>movie.id===action.payload.id);
            if(index>=0){//we alredy have that movie in favorit
                const updatedFavMovie=[...state.favMovies] 
                updatedFavMovie.splice(index,1)//removing the One movi who have that index from the Updated liste
                return{...state,favMovies:updatedFavMovie}
            }else{
                return {...state,favMovies:state.favMovies.concat(action.payload)};
            }

        default:
             return state;

    }
    return state;
}

export default favMoviesReducer;
