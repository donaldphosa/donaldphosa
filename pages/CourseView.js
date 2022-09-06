import { Image, Pressable, ScrollView, StyleSheet, Text, View, Alert } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Video } from "expo-av";
import { useState } from 'react';
import PurchaseModel from './PurchaseModel';

const CourseView = () => {
    const [vid,setVid] = useState('')
    const [purchase,setPurchase] = useState(false)
    if(purchase){
        return(
            <PurchaseModel setPurchase={setPurchase}/>
        );
    }
  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <View style={styles.container}>
             <View style={styles.upperPart}>
           {  vid?  <Video
                        style={styles.video}
                    source={{
                        uri: vid
                      }}
                      resizeMode="contain"
                      useNativeControls={true}
             />:<>
                 <Text style={styles.bagde}>React Native</Text>
                    <Image source={require('../assets/images/IllustrationC.png')}/>
             </>
            }
                </View>
               <View style={styles.content}>
                    <View style={styles.header}>
                        <View>
                        <Text style={styles.courseName}>React Native</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'#858597',fontSize:12}}>6h 14min</Text>
                            <Text style={{color:'#858597',fontSize:12}}> . 24 Lessons</Text>
                        </View>

                    </View>
                    <Text style={{color:'#3D5CFF',fontWeight:'bold',fontSize:20}}>$74.00</Text>
                    </View>
                    <View>
                        <Text style={{color:'#1F1F39',fontWeight:'bold',fontSize:16}}>About this course</Text>
                        <Text style={{color:'#858597',fontSize:12}}>Sed ut perspiciatis unde omnis iste natus error sit 
                                voluptatem accusantium doloremque laudantium, </Text>
                    </View>
                    <View style={{marginTop:34,height:'58%'}}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <VideoView setPurchase={setPurchase}  setVid={setVid}/>
                            <VideoView setPurchase={setPurchase}  setVid={setVid}/>
                            <VideoView setPurchase={setPurchase}  setVid={setVid}/>
                            <VideoView setPurchase={setPurchase} setVid={setVid}/>
                            <View/>
                        </ScrollView>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Pressable style={styles.favorate}>
                            <Ionicons name='star-outline' color={'#FF6905'} size={18}/>
                        </Pressable>
                        <Pressable onPress={()=>{
                              Alert.alert('Confirm', 'Confirm purchase', [
                                {
                                  text: 'Cancel',
                                  onPress: () =>  setPurchase(false),
                                  style: 'cancel',
                                },
                                { text: 'OK', onPress: () =>  setPurchase(true) },
                              ]);
                           
                            }} style={styles.buyBtn}>
                            <Text style={{color:'#ffffff',fontSize:16,fontWeight:'800'}}>Buy Now</Text>
                        </Pressable>
                    </View>
               </View>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

const VideoView = ({setVid})=>{
    return(
        <Pressable onPress={()=>{
            setVid('http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4')
            
            }} style={styles.videoContainer}>
            <Text style={{fontSize:24,color:'#B8B8D2',fontWeight:'700'}}>01</Text>
            <View style={{width:185}}>
                <Text style={{fontSize:14,color:'#1F1F39',fontWeight:'600',marginBottom:5}}>Introduction to React native</Text>
                <Text style={{fontSize:12,color:'#3D5CFF',fontWeight:'700'}}>6:10 mins</Text>
            </View>
            <View style={styles.vidIcon}>
                <Ionicons name='play' size={26} color={'#FFFFFF'}/>
            </View>
        </Pressable >
    );
}

export default CourseView

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#FFE7EE'
    },
    content:{
        width:'100%',
        height:'68%',
        backgroundColor:'#ffffff',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        position:'absolute',
        bottom:0,
        padding:10
    },
    upperPart:{
        padding:10,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        height:'35%'
    },
    bagde:{
       color:'#1F1F39',
       fontSize:20,
       fontWeight:'bold'
    },
    header:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginBottom:16
    },
    courseName:{
        color:'#1F1F39',
        fontWeight:'bold',
        fontSize:20
    },
    videoContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:24
    },
    vidIcon:{
        backgroundColor:'#3D5CFF',
        width:44,
        height:44,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'
    },
    favorate:{
        alignItems:'center',
        justifyContent:'center',
        width:89,
        height:50,
        borderRadius:10,
        backgroundColor:'#FFEBF0'
    },
    buyBtn:{
        alignItems:'center',
        justifyContent:'center',
        width:236,
        height:50,
        borderRadius:10,
        backgroundColor:'#3D5CFF'
    },
    video: {
        alignSelf: 'center',
        width: '100%',
        height: '100%',
        marginBottom:20
      }
})