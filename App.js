
import { StyleSheet} from 'react-native';
// import {useEffect,useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from './screens/HomeScreen';
import NewMovieScreen from './screens/NewMovieScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import MovieDetailScreen from './screens/MovieDetailScreen';

import { createStore ,combineReducers} from 'redux';
import {Provider} from 'react-redux'
import favMoviesReducer from './store/reducers/favMoviesReducer';



const  rootReducer = combineReducers({
  favoriteMovies:favMoviesReducer
});

const store = createStore(rootReducer)



const tab = createBottomTabNavigator();




export default function App() {
 return(
<Provider store={store}>


  <NavigationContainer>
    <tab.Navigator 
      screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
          let iconName;
          if(route.name=='Home'){
            iconName='home'
          }else if(route.name=='Favorite'){
            iconName='heart'
          }
          else if(route.name=='New'){
            
            iconName='star'
          }
          else if(route.name=='MovieDetailScreen'){
            
            iconName='information-circle'
          }
          return <Ionicons name={iconName} size={24} />
        }
      })}
    >
     
        <tab.Screen name='Home' component={HomeScreen} />
        <tab.Screen name='Favorite' component={FavoriteScreen} />
        <tab.Screen name='New' component={NewMovieScreen} />
        <tab.Screen name='MovieDetailScreen' component={MovieDetailScreen} ta/>
        

    </tab.Navigator>
  </NavigationContainer>
</Provider>
 )
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
