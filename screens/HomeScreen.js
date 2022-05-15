import { StyleSheet, Text, View,ScrollView } from 'react-native';
import {useEffect,useState} from 'react'
import {getMoviesFromApi} from '../Api/index'
import {TextInput} from 'react-native-paper'
import MovieCard from '../components/MovieCard';


import React from 'react'

export default function HomeScreen() {
    const [movies,setMovies] = useState([]);
    const [searchMovie,setSearchMovie] = useState('');
    
    useEffect(()=>{
      const getMovies = async ()=>setMovies(await getMoviesFromApi('batman',1))
      getMovies();
  
    },[]);
  
  
  
  
  const Search = async ()=>{
    setMovies(await getMoviesFromApi((searchMovie.length>0 ? searchMovie:"bathman"),1));
    setSearchMovie('');
  }
    
    return (
     <>
  
      <View>
       
        <TextInput 
        placeholder='Search your movies !'
        value={searchMovie}
        onChangeText={(text)=>setSearchMovie(text)} 
        style={styles.SearchTextInput} 
        left={<TextInput.Icon name="magnify" onPress={Search} />}
        onSubmitEditing={Search}
        />
         {movies.results &&(
        <ScrollView contentContainerStyle={{
          flexDirection:"row",
          flexWrap:"wrap",
          justifyContent:"space-around",
          alignItems:"center"
        }}>
            {movies.results.map((movie,i)=>(
              
                   <MovieCard movie={movie} key={i} />
              
             
            ))}
        </ScrollView>
        )}
      </View>
      
      </>
    );
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },SearchTextInput:{
      marginTop:2
    }
  
  });