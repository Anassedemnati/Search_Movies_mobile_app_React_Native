export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'


export const toggleFavorite = (movie)=>{
    return{type:TOGGLE_FAVORITE,payload: movie}

}