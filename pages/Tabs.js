import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'
import Home from './Home';
import Search from './Search'
import Account from './Account'
import Message from './Message'
import Course from './Course'
import { View } from 'react-native';



const Tabs = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator 
      // initialRouteName='Homes' 
      screenOptions={{
        headerShown:false,
        tabBarShowLabel:true,
        tabBarStyle:{
          paddingHorizontal:0,
          height:70,
          alignItems:'center',
          paddingBottom:10,
          color:'#3D5CFF',
          width:'100%',
          justifyContent:'space-between'
        },
        
       
      }}
     >
      <Tab.Screen
        options={
          {
            tabBarIcon:({focused})=>{
              return(
                <View style={{marginBottom:0}}>
                  <Ionicons name="home-sharp" size={30} color={focused?"#3D5CFF":'#CEECFE'} />
                </View>
              )
            }
            
          }
        }
        name="Home" component={Home} />
      <Tab.Screen
        options={
          {
            tabBarIcon:({focused})=>{
              return(
                <View style={{marginBottom:0}}>
                  <Ionicons name="book" size={30} color={focused?"#3D5CFF":'#CEECFE'} />
                </View>
              )
            }
            
          }
        }
        name="Course" component={Course} />

      <Tab.Screen
        options={
          {
            tabBarIcon:({focused})=>{
              return(
                <View style={{marginBottom:0}}>
                  <Ionicons name="search-outline" size={30} color={focused?"#3D5CFF":'#CEECFE'} />
                </View>
              )
            }
            
          }
        }
        name="Search" component={Search} />
      <Tab.Screen
        options={
          {
            tabBarIcon:({focused})=>{
              return(
                <View style={{marginBottom:0}}>
                  <Ionicons name="mail" size={30} color={focused?"#3D5CFF":'#CEECFE'}/>
                </View>
              )
            }
            
          }
        }
        name="Message" component={Message} />
      <Tab.Screen
        options={
          {
            tabBarIcon:({focused})=>{
              return(
                <View style={{marginBottom:0}}>
                  <Ionicons name="person" size={28} color={focused?"#3D5CFF":'#CEECFE'} />
                </View>
              )
            }
            
          }
        }
        name="Account" component={Account} />
 
    </Tab.Navigator>
  )
}

export default Tabs
