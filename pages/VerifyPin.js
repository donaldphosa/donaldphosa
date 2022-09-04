import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';

const PhoneNumber = ({navigation}) => {
    const [done,setDone] = useState(false)
    const [second,setSecond] = useState(false)
    const [third,setThird] = useState(false)
    const [forth,setForth] = useState(false)
    if(done){
        return <Model navigation={navigation} setDone={setDone}/>
    }
  return (
    <SafeAreaProvider>
        <SafeAreaView>

    <ScrollView >
        <View style={styles.container}>

        <View style={styles.heading}>
            <Ionicons name="arrow-back-outline" size={18} color="#1F1F39" />
            <Text style={{color:'#1F1F39',fontWeight:'600',fontSize:18}}>Verify Phone</Text>
            <Text></Text>
        </View>
        
            <Text style={styles.phoneRequest}>Code sent to 082 536 4205</Text>
            <View style={styles.pin}>
                <View style={styles.numBox}>
                    <TextInput style={{width:'100%',height:'100%',textAlign:'center'}} autoFocus={true} blurOnSubmit={false} keyboardType='numeric' maxLength={1}/>
                </View>
                <View style={styles.numBox}>
                    <TextInput style={{width:'100%',height:'100%',textAlign:'center'}} blurOnSubmit={false} keyboardType='numeric' maxLength={1}/>
                </View>
                <View style={styles.numBox}>
                    <TextInput style={{width:'100%',height:'100%',textAlign:'center'}} keyboardType='numeric' maxLength={1}/>
                </View>
                <View style={styles.numBox}>
                    <TextInput style={{width:'100%',height:'100%',textAlign:'center'}} keyboardType='numeric' maxLength={1}/>
                </View>
            </View>
            <View style={styles.numInput}>
            <Pressable onPress={()=>setDone(true)} style={styles.button}>
                <Text style={{color:'#ffff',fontWeight:'600',fontSize:16}}>Verify and Create Account</Text>
            </Pressable>
            </View>
        
        </View>
    </ScrollView>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default PhoneNumber

const Model = ({setDone, navigation})=>{
    return(
        <View style={styles.modelContainer}>
            <View style={styles.model}>
                <View style={styles.tickContainer}>
                    <Ionicons name="checkmark" size={48} color="#FFFFFF" />
                </View>
                <Text style={{color:'#1F1F39',fontSize:16,fontWeight:'600'}}>Success</Text>
                <Text style={styles.congrats}>Congratulations, You have completed your registration</Text>
                <Pressable onPress={()=>{
                    setDone(false)
                    navigation.navigate('Tabs')
                }} style={styles.doneButton}>
                    <Text style={{color:'#ffffff',fontSize:16,fontWeight:'600'}}>Done</Text>
                </Pressable>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#ffff',
        alignItems:'center'
    },
    heading:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:44,
        padding:10,
        width:'100%',
        marginBottom:68
    },
    phoneRequest:{
        marginTop:25,       
        color:'#858597',
        fontSize:14,
        padding:10,
        width:'100%',
        backgroundColor:'#ffff',
        textAlign:'center'
    },
    button:{
       paddingVertical:12,
       paddingHorizontal:25,
       backgroundColor:'#3D5CFF',
        borderRadius:10,
        marginTop:56
    },
    pin:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:18
    },
    numBox:{
        borderWidth:1,
        borderColor:'#B8B8D2',
        width:60,
        height:60,
        marginLeft:20,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    modelContainer:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#858597',
    },
    model:{
        width:291,
        height:301,
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        alignItems:'center',
        paddingVertical:48,
        
    },
    tickContainer:{
        width:64,
        height:64,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#3D5CFF',
        borderRadius:100,
        marginBottom:16
    },
    congrats:{
        textAlign:'center',
        width:182,
        lineHeight:20,
        fontSize:12,
        color:'#858597',
        marginVertical:19
    },
    doneButton:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#3D5CFF',
        width:259,
        height:50,
        borderRadius:10
    }
})