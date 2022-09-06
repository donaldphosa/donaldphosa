import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';


const Course = () => {
  const [index,setIndex]=useState(1)
  return (
  <SafeAreaProvider>
    <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{color:'#1F1F39',fontSize:24,fontWeight:'bold'}}>Course</Text>
            <View style={styles.profilePic}>
              <Image source={require('../assets/images/avater.png')} />
            </View>
          </View>
          <View style={styles.search}>
            <Ionicons name="search" size={18} color="#B8B8D2" />
            <TextInput style={styles.searchField} placeholder='Find Course'/>
            <Image style={{width:21,height:21}} source={require('../assets/images/Vector.png')} />
          </View>
          <Text style={{color:'#1F1F39',fontSize:18,fontWeight:'600',marginVertical:18}}>Chose your course</Text>
          <View style={styles.filters}>
            <Pressable onPress={()=>setIndex(1)}>
            <View style={[styles.filterCont,index===1?{backgroundColor:'#3D5CFF'}:{backgroundColor:'transparent'}]}>
              <Text style={[styles.text , index===1?{color:'#ffffff'}:{}]}>All</Text>
            </View>
            </Pressable>
            <Pressable onPress={()=>setIndex(2)}>
            <View style={[styles.filterCont,index===2?{backgroundColor:'#3D5CFF'}:{backgroundColor:'transparent'}]}>
              <Text style={[styles.text , index===2?{color:'#ffffff'}:{}]}>Popular</Text>
            </View>
            </Pressable>
            <Pressable onPress={()=>setIndex(3)}>
            <View style={[styles.filterCont,index===3?{backgroundColor:'#3D5CFF'}:{backgroundColor:'transparent'}]}>
              <Text style={[styles.text , index===3?{color:'#ffffff'}:{}]}>New</Text>
            </View>
            </Pressable>
            </View> 
          <View style={{height:'60%',marginTop:10}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Courses/>
            <Courses/>
            <Courses/>
            <Courses/>
            <Courses/>
            <Courses/>
          </ScrollView>
        </View>       
        </View>
    </SafeAreaView>
  </SafeAreaProvider>
  )
}

export default Course

const Courses = () =>{
  return(
    <View style={styles.CourseContainer}>
      <View style={styles.imageContainer}>
        <Image resizeMode='cover' style={styles.image} source={{uri:'https://th.bing.com/th/id/OIP.voawJ6Ch_K82x42SBSmJQQHaHb?pid=ImgDet&w=150&h=151&c=7'}}/>
      </View>
        <View style={styles.courseDetails}>
          <Text style={{color:'#1F1F39',fontSize:14,fontWeight:'700'}}>React v.16.0.5</Text>
          <View style={styles.writer}>
          <Ionicons name="person" size={12} color="#B8B8D2" />
          <Text style={{color:'#B8B8D2',fontSize:14,fontWeight:'400',marginLeft:3}}>Shake Spear</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={{color:'#3D5CFF',fontSize:16,fontWeight:'bold'}}>$190</Text>
            <Text style={{backgroundColor:'#FFEBF0',color:'#FF6905',fontSize:14,marginLeft:5,padding:2,borderRadius:20}}>16 hours</Text>
          </View>
        </View>
        <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    paddingHorizontal:20,

  },
  profilePic:{
    borderRadius:100,
    alignItems:'center'
  },
  header:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:"5%"
  },
  search:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:15,
    backgroundColor:'#F4F3FD',
    width:'100%',
    height:48,
    padding:14,
    borderRadius:10
  },
  searchField:{
    width:'70%',
    color:'#B8B8D2'
  },
  filters:{
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-between',
    width:'80%'
  },
  filterCont:{
    alignItems:'center',
    justifyContent:'center',
    width:73,
    height:28,
    borderRadius:100
  },
  text:{
    color:'#858597',
    fontSize:14
  },
  CourseContainer:{
    width:'100%',
    height:100,
    backgroundColor:'#ffffff',
    marginBottom:15,
    borderRadius:15,
    shadowOpacity: 1,
    shadowColor:'gray',
    elevation: 5,
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    justifyContent:'space-between'
  },
  image:{
    width:'110%',
    height:'110%',
  },
  imageContainer:{
    width:70,
    height:70,
    borderRadius:10,
    overflow:'hidden'
  },
  courseDetails:{
    width:'60%',
    
  },
  writer:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:3
  },
  priceContainer:{
    flexDirection:'row',
    alignItems:'center'
  }
})