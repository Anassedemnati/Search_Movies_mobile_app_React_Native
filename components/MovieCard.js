import { View, Text ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import { getImageFromApi } from '../Api/index'
import { useNavigation } from '@react-navigation/native'


 

const MovieCard = ({movie}) => {

  const navigation = useNavigation();

  const imageClikeHandler=()=>{
  navigation.navigate("MovieDetailScreen",{
    movie
  })
  
}

  return (
    <View style={{justifyContent:"center",alignItems:"center"}}>
      <TouchableOpacity activeOpacity={.5} onPress={imageClikeHandler}>
      <Image 
      // onAccessibilityTap={onClickImage}
        style ={{
            width:160,
            height:215,
            margin:10,
            borderRadius:10,
            shadowColor:"black"
            
        }}
        source={{uri:getImageFromApi(movie.poster_path)}}
      />
      </TouchableOpacity>
     
    </View>
  )
}

export default MovieCard