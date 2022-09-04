import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Home = () => {
  const [progress,setProgress] = useState(100)
  return (
<SafeAreaProvider>
    <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.floating}>
              <View style={styles.topView}>
                <Text style={{color:'#858597',fontSize:12}}>Learned today</Text>
                <Text style={{color:'#3D5CFF',fontSize:12}}>My course</Text>
              </View>
              <Text style={{color:'#1F1F39',fontWeight:'bold',fontSize:20}}>46min<Text style={{color:'#858597',fontSize:10}}>/60min</Text></Text>
              <View style={styles.track}>
                <LinearGradient start={{x:0,y:1}} end={{x:0.8,y:0.2}} style={[styles.bar,{width:`${progress}%`}]} colors={['#ffffff','red']}>
                </LinearGradient>
              </View>
          </View>
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
                <ScrollView showsHorizontalScrollIndicator={false} style={{marginTop:66}} horizontal={true}>
                 <Card/>
                 <Card/>
                </ScrollView>
                <View style={{height:300}}>
                <Text style={{fontSize:18,fontWeight:'600',color:'#1F1F39'}}>Learning Plan</Text>

                <ScrollView showsVerticalScrollIndicator={false}>
                  <PlanContainer func={()=>{Alert.alert('pressed')}}>
                    <View style={
                      {
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'space-between',
                        marginBottom:20
                      }
                    }>
                      <Text style={{
                        fontSize:14,
                        fontWeight:'600',
                        color:'#1F1F39'
                      }}>Packaging Design</Text>
                      <Text style={{
                        fontSize:14,
                        fontWeight:'600',
                        color:'#1F1F39'
                      }}>40/48</Text>
                    </View>
                    <View style={
                      {
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'space-between'
                      }
                    }>
                      <Text style={{
                        fontSize:14,
                        fontWeight:'600',
                        color:'#1F1F39'
                      }}>Product Design</Text>
                      <Text style={{
                        fontSize:14,
                        fontWeight:'600',
                        color:'#1F1F39'
                      }}>40/48</Text>
                    </View>
                  </PlanContainer>
                  <PlanContainer>

                  </PlanContainer>
                  <PlanContainer>

                  </PlanContainer>
                </ScrollView>
                </View>
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

const PlanContainer = ({children, func})=>{
  return<Pressable onPress={func}>
      <View style={styles.wrapper}>
        {children}
      </View>
  </Pressable>
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:'#3D5CFF',
    alignItems:'center'
  },
  bottomContainer:{
    width:'100%',
    height:'75%',
    backgroundColor:'#FFFFFF',
    position:'absolute',
    bottom:0,
    padding:20
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
    height:96,
    backgroundColor:'#FFFFFF',
    position:'absolute',
    top:137,
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
    borderRadius:10
  },
  card:{
    width:253,
    height:154,
    borderRadius:15,
    backgroundColor:'#CEECFE',
    marginRight:10,
    padding:18,
    justifyContent:'space-between'
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
      height:133,
      borderRadius:15,
      shadowOpacity: 0.25,
      elevation: 5,
      backgroundColor:'#ffffff',
      marginVertical:5,
      padding:20,
      zIndex:99,
  }
})