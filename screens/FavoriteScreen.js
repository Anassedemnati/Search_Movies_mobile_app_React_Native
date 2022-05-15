import { StyleSheet, View,ScrollView } from 'react-native';
import {useEffect,useState} from 'react'
import MovieCard from '../components/MovieCard';
import React from 'react'

import { useSelector } from 'react-redux';





const FavoriteScreen = () => {

const availebleFavMovies = useSelector(state => state.favoriteMovies.favMovies);



  const [favMovies,setFavMovies]= useState([])
useEffect(()=>{
  setFavMovies(availebleFavMovies)
},[availebleFavMovies])
 




  return (
    <View>
       {favMovies &&(
        <ScrollView contentContainerStyle={{
          flexDirection:"row",
          flexWrap:"wrap",
          justifyContent:"space-around",
          alignItems:"center"
        }}>
            {favMovies.map((movie,i)=>(
                   <MovieCard movie={movie} key={i} />
                  
            ))}
        </ScrollView>
        )}
    </View>
  )
}

export default FavoriteScreen