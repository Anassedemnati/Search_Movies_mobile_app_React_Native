



  let favoriteMovies= [
    {
      "id": 414906,
      "original_language": "en",
      "original_title": "The Batman",
      "overview": "Deux années à arpenter les rues en tant que Batman et à insuffler la peur chez les criminels ont mené Bruce Wayne au coeur des ténèbres de Gotham. Avec seulement quelques alliés de confiance parmi le ",
   
      "popularity": 2485.829,
      "poster_path": "/t9JGg10CW1DzXEdWL54ewkUko6N.jpg",
      "release_date": "2022-03-01",
      "title": "The Batman",
      "video": false,
      "vote_average": 7.9,
      "vote_count": 2835,
  
    }];
    
  export const deleteFavouritMovie=()=>{
     favoriteMovies = favoriteMovies.filter(movie=>movie.id !==id)
   
    }

    export const addFavouritMovie=(movie)=>{
     favoriteMovies = [movie,...favoriteMovies];
    }
    export const getFavouritMovie=(movie)=>{
       return favoriteMovies = [movie,...favoriteMovies];
      }

  




 


   
           
      
          
   

