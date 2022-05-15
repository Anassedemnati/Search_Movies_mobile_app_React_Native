import { View, Text,Image,StyleSheet} from 'react-native'
import React, { useEffect } from 'react'
import vars from '../env';

const MapPreview = (props) => {

// useEffect(()=>{

// },[props.location])
// location.coords.latitude
    // const imagePreviewURL =`https://maps.googleapis.com/maps/api/staticmap?center=${props.location.latitude},${props.location.longitude}$zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${props.location.latitude},${props.location.longitude}&key=${vars.googleApiKey}&signature=YOUR_SIGNATURE`;
    // const [imagePreviewURL,setImagePreviewURL] =(`https://dev.virtualearth.net/REST/V1/Imagery/Map/Road/${props.location.latitude}%2C${props.location.longitude}?mapSize=400,200&format=png&key=AmeWcWwAjy05EwLSXyFb0QqEDwDv4opGQ53YVEDUc4Zm0wbrAfMWwGHUW6gKd9C3`)
   // const [imagePreviewURL,setImagePreviewURL] =("https://dev.virtualearth.net/REST/V1/Imagery/Map/Road/37.4220049%2C-122.0840103/13?mapSize=400,200&format=png&key=AmeWcWwAjy05EwLSXyFb0QqEDwDv4opGQ53YVEDUc4Zm0wbrAfMWwGHUW6gKd9C3")
    const imagePreviewURL ="https://dev.virtualearth.net/REST/V1/Imagery/Map/Road/37.4220049%2C-122.0840103/13?mapSize=400,200&format=png&key=AmeWcWwAjy05EwLSXyFb0QqEDwDv4opGQ53YVEDUc4Zm0wbrAfMWwGHUW6gKd9C3"
    
    //console.log(imagePreviewURL)
    console.log(props.location)
    

  return (
    <View >
    
     {props.location  ? <Image style={styles.ImageStyle} source={{uri:imagePreviewURL}}/> : <Text>location not found</Text>}
     

    </View>
  )
}
const styles = StyleSheet.create({
    mapPriciew:{
        justifyContent:'center',
        alignItems:'center'
    },
    ImageStyle:{
        width:'100%',
        height:'100%'
    }



});
export default MapPreview