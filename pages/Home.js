import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Pressable } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


const Home = () => {
  const [progress,setProgress] = useState(80)
  return (
<SafeAreaProvider>
    <SafeAreaView>
        <View style={styles.container}>
         
          <View style={styles.profile}>
            <View>
              <Text style={styles.Greet}>Hi, Donald</Text>
              <Text style={styles.sText}>let's start learning</Text>
            </View>
            <View style={styles.profilePic}>
              <Image style={{width:'100%',height:'100%'}} resizeMode='contain' source={require('../assets/images/avater.png')}/>
            </View>
          </View>
            <View style={styles.bottomContainer}>
          
            <ScrollView  style={{paddingHorizontal:15,zIndex:15}} showsVerticalScrollIndicator={false} stickyHeaderIndices={[1]}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                 <Card/>
                 <Card/>
                </ScrollView>
                <View style={{paddingVertical:15,backgroundColor:'#fff',shadowOpacity: 0.15}}>
                <Text style={{fontSize:18,fontWeight:'600',color:'#1F1F39',marginVertical:10,backgroundColor:'#fff',zIndex:20}}>Enrolled Courses</Text>
                </View>
                  <PlanContainer title={'React Native'} progress={progress}/>
                  <PlanContainer title={'JavaScript for beginners'} progress={progress}/>
                  <PlanContainer title={'HTML and CSS '} progress={progress}/>
                  
                </ScrollView>
                </View>
                </View>
           
       
    </SafeAreaView>
</SafeAreaProvider>
  )
}

export default Home


const Card = ()=>{
  return(
    
    <View style={styles.card}>
      <Text style={styles.cardText}>What do you learn today?</Text>
      <TouchableOpacity style={styles.cardButton}>
        <Text style={{color:'#ffffff',fontSize:12,fontWeight:'bold'}}>Get Started</Text>
      </TouchableOpacity>
    </View>
    
  );
}

const PlanContainer = ({ func, backgroundColor,progress,title})=>{
  return<Pressable onPress={func}>
      <View style={[styles.wrapper,{backgroundColor:backgroundColor?backgroundColor:'#ffffff'}]}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View >
            <Text style={{color:'#440687',fontSize:25,fontWeight:'600',marginBottom:10}}>{title}</Text>
            <Text style={{color:'#1F1F39',fontSize:14,fontWeight:'800',marginBottom:10}}>24/30 lessons</Text>
          </View>
          <View style={styles.vidIcon}>
                <Ionicons name='play' size={26} color={'#FFFFFF'}/>
            </View>
      </View>
      <LinearGradient start={{x:0,y:1}} end={{x:0.8,y:0.2}} style={[styles.bar,{width:`${progress}%`}]} colors={['red','orange','green']}>
                </LinearGradient>
      </View>
  </Pressable>
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:'#3D5CFF',
    alignItems:'center',
  },
  bottomContainer:{
    width:'100%',
    height:'75%',
    backgroundColor:'#FFFFFF',
    position:'absolute',
    bottom:0,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    paddingTop:15
  
  },
  profile:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%',
    marginTop:44,
    paddingHorizontal:20
  },
  profilePic:{
    width:60,
    height:60,
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center'
  },
  Greet:{
    fontSize:24,
    fontWeight:'bold',
    color:'#FFFFFF'
  },
  sText:{
    fontSize:14,
    color:'#FFFFFF'
  },
  floating:{
    width:335,
    height:'15%',
    backgroundColor:'#FFFFFF',
    position:'absolute',
    top:"19%",
    shadowOpacity: 0.15,
    elevation: 5,
    zIndex:99,
    borderRadius:15,
    padding:15,
    gap:5
  },
  topView:{
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row'
  },
  track:{
    width:'100%',
    backgroundColor:'#F4F7FD',
    height:7,
    marginTop:10,
    borderRadius:10,
    overflow:'hidden'
  },
  bar:{
    height:'100%',
    borderRadius:10,
    height:8
  },
  card:{
    width:253,
    height:'100%',
    borderRadius:15,
    backgroundColor:'#CEECFE',
    marginRight:10,
    padding:28,
    justifyContent:'space-between',
    marginBottom:10
  },
  cardText:{
    fontWeight:'bold',
    fontSize:16,
    color:'#1F1F39'
  },
  cardButton:{
    backgroundColor:'#FF6905',
    alignItems:'center',
    justifyContent:'center',
    width:85,
    height:31,
    borderRadius:5
  },
  wrapper:{
      width:'100%',
      height:110,
      borderRadius:15,
      shadowOpacity: 0.55,
      elevation: 10,
      backgroundColor:'#ffffff',
      marginVertical:5,
      padding:10,
      shadowColor:'gray',
      
  },
  vidIcon:{
    backgroundColor:'#3D5CFF',
    width:44,
    height:44,
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center'
}
})