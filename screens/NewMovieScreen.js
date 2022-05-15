import { StyleSheet, Text, View,ScrollView } from 'react-native';
import {useEffect,useState} from 'react'
import {getTrendingMovie} from '../Api/index'
import MovieCard from '../components/MovieCard';
import React from 'react'

const NewMovieScreen = () => {
  const [newMovies,setNewMovies] = useState([]);

  useEffect(()=>{
    const getMovies = async ()=>setNewMovies(await getTrendingMovie())
    getMovies();

  },[]);



  return (
    <View>
      {newMovies.results &&(
        <ScrollView contentContainerStyle={{
          flexDirection:"row",
          flexWrap:"wrap",
          justifyContent:"space-around",
          alignItems:"center"
        }}>
            {newMovies.results.map((movie,i)=>(
                   <MovieCard movie={movie} key={i} />
            ))}
        </ScrollView>
        )}
    </View>
  )
}

export default NewMovieScreen