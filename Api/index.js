import axios from "axios";


//TOKEN DE LAPI
const API_TOKEN = 'add token here';

//olde api for test only
//const url = "http://www.omdbapi.com/?i=tt3896198&apikey=5d1a7305"

//METHODE qui recupere les donne de api 
export const getMoviesFromApi = async (title,page)=>{
   if(title){
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=fr&query=${title}&page=${page}`;
    
        try {
            
            const res  =  await axios.get(url);
            return  res.data;
        } catch (error) {
            console.error(error)
        }
    
   }
        

}

//METHODE qui recupere les filme trending

export const getTrendingMovie = async()=>{
    const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${API_TOKEN}`
    try {
            
        const res  =  await axios.get(url);
        return  res.data;
    } catch (error) {
        console.error(error)
    }
}

//methode pour recupere limage de l api
export const getImageFromApi=(name)=>{
    return `https://image.tmdb.org/t/p/w300${name}`
}
