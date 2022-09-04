import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';

const PhoneNumber = ({navigation}) => {
  return (
    <SafeAreaProvider>
        <SafeAreaView>

    <ScrollView >
        <View style={styles.container}>

        <View style={styles.heading}>
            <Ionicons name="eye-off" size={18} color="#1F1F39" />
            <Text style={{color:'#1F1F39',fontWeight:'600',fontSize:18}}>Continue with Phone</Text>
            <Text></Text>
        </View>
        <Image style={styles.illustran} source={require('../assets/images/illustration2.png')} />
        <View style={styles.bottomPart}>
            <Text style={styles.phoneRequest}>Enter Your Phone Number</Text>
            <View style={styles.numInput}>
            <TextInput style={styles.numField} keyboardType='numeric' placeholderTextColor={'#1F1F39'} placeholder='Number'/>
            <Pressable onPress={()=>navigation.navigate('VerifyPin')} style={styles.button}>
                <Text style={{color:'#ffff',fontWeight:'600',fontSize:16}}>Continue</Text>
            </Pressable>
            </View>
        </View>
        </View>
    </ScrollView>
        </SafeAreaView>
</SafeAreaProvider>
  )
}

export default PhoneNumber

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#F0F0F2',
        alignItems:'center'
    },
    heading:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:44,
        padding:10,
        width:'100%'
    },
    illustran:{
        marginVertical:36,                 
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
    bottomPart:{
        alignItems:'center',
        width:'100%',
        height:'100%',
        backgroundColor:'#fff'
    },
    button:{
       paddingVertical:12,
       paddingHorizontal:25,
       backgroundColor:'#3D5CFF',
        borderRadius:10,
        position:'absolute',
        right:0
    },
    numInput:{
        flexDirection:'row',
        width:'90%',
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#B8B8D2',
        borderWidth:0.5,
        borderRadius:10,
        marginTop:23,
        paddingVertical:11
    },
    numField:{
        width:'100%',
      height:'100%',
      paddingHorizontal:25,
      fontSize:16,
      fontWeight:'bold'
        
    }
})