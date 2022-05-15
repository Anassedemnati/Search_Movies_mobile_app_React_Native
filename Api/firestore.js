import firestore  from '@react-native-firebase/firestore'


export const getFavmovies= async()=>{
    try {
        const favMoviesDoc = await firestore().collection("favMovies").get()

        console.log(favMoviesDoc)
        confirm.log("data from firebase")
        return favMoviesDoc;
    } catch (error) {
        console.error(error);
    }
    


}