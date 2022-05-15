import { View, Text ,Image,ScrollView,Alert} from 'react-native'
import React,{useState} from 'react'
import { useRoute } from '@react-navigation/native'
import { getImageFromApi } from '../Api/index';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/favMoviesActions';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions'
import MapPreview from '../components/MapPreview';
import MapView from 'react-native-maps';

const verifyPermissions = async ()=>{
  const result = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND)
  if(result.status!=='granted'){
    Alert.alert(
      'Insufficient permissions!',
      'You need to grant location permissions to use this app.',
      [{text:'Okay'}]
    );
    return false;
  }
  return true;
};


 

const MovieDetailScreen = () => {

  const [pikedLocation,setPikedLocation]= useState({}); 

  

  

const getLocationHandler = async ()=>{
  // const hasPermission = await verifyPermissions();
 
  // if(!hasPermission){
  //   return;
  // }
  try {
    const location =  await Location.getCurrentPositionAsync({timeInterval:5000});
    console.log(location)
    setPikedLocation({
      latitude:location.coords.latitude,
      longitude:location.coords.longitude
      
    })
  } catch (error) {
    Alert.alert('Could not fetch location!','Please try again later or a location on the map.',[{text:'Okay'}])
  }
   

}






    const route = useRoute();
    if(!route){
      navigation.navigate("HomeScreen")
    }
    const movie = route.params.movie;
    
     
const dispatch = useDispatch()// une methode dispatch qui lance les dispatch new action

    const addToFavouriteHandler =(movie)=>{
     dispatch(toggleFavorite(movie));
    }

  return (
    <View style={{flex:1}}>
        <ScrollView contentContainerStyle={{
          flexDirection:"row",
          flexWrap:"wrap",
          justifyContent:"space-around",
          alignItems:"center"
        }}>
        <Image 
        style ={{
            width:400,
            height:500,
            margin:5,
            borderRadius:50,
            shadowColor:"black",
            justifyContent:'center',
            alignContent:'center'

            
            
        }}
        source={{uri:getImageFromApi(movie.poster_path)}}
      />
      <Text 
        style={{fontSize:40,fontWeight:'700',marginTop:50,alignSelf:'auto'}}>
        {movie.original_title}
      </Text>

      <Text 
          style={{fontSize:16,fontStyle:'italic',marginLeft:10,marginRight:5,marginBottom:30,alignSelf:'flex-start',marginTop:10}}>
          {movie.overview}
       </Text>

       {/* <Text style={{fontSize:17,marginTop:50,marginLeft:7,fontWeight:'300'}}>Release date : {movie.release_date} </Text> 
       <Text style={{fontSize:17,marginTop:50,marginRight:10}}> User rating : {movie.vote_average*10} % </Text> */}
       <Button mode="contained" color='black'>date: {movie.release_date}</Button>
       <Button  mode="contained" color='black'>User rating: {movie.vote_average*10}%</Button>

       <Button icon="heart-outline" mode="contained" color='black' style={{margin:30}} onPress={() => addToFavouriteHandler(movie)}>Add to Favorite</Button>
       <View style={{
         marginBottom:10,
         width:'100%',
         height:300,
         borderColor:'#ccc',
         borderWidth:1,
         justifyContent:'center',
         alignItems:'center',
       }}>
         <MapPreview location={pikedLocation} />
           
        
         
       </View>
       {/* <MapView  initialRegion={{
          latitude:37.4220049,
          longitude:-122.0840103,
          latitudeDelta:0.0922,
          longitudeDelta:0.0421
         }} /> */}
       <Button mode="contained" color='green' style={{margin:40}} onPress={()=>getLocationHandler() } >get location </Button>
      
        </ScrollView>
       
    </View>
  )
}

export default MovieDetailScreen