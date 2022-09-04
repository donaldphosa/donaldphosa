import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Ionicons from '@expo/vector-icons/Ionicons';
import CheckBox from 'react-native-check-box'

const SignUp = ({navigation}) => {
    const [checked,setChecked] = useState(false)
  return (
    <SafeAreaProvider>
        <SafeAreaView>

    <View style={styles.container}>
        <Text style={styles.signupText}>Sign Up</Text>
        <Text style={styles.detailsText}>Enter your details below & free sign up</Text>
      <ScrollView style={styles.body}>

        <View style={styles.textInput}>
            <Text style={{color:'#858597'}}>Your Name</Text>
            <TextInput placeholderTextColor={'#1F1F39'} style={styles.inputField} placeholder='Name'/>
        </View>
        <View style={styles.textInput}>
            <Text style={{color:'#858597'}}>Your Email</Text>
            <TextInput keyboardType='email-address' placeholderTextColor={'#1F1F39'} style={styles.inputField} placeholder='e.g email@gmail.com'/>
        </View>
        <View style={styles.textInput}>
            <Text style={{color:'#858597'}}>Your Email</Text>
            <View style={[styles.inputField,{justifyContent:'space-between',flexDirection:'row',alignItems:'center',paddingRight:24}]}>
                <TextInput style={{width:'95%'}} keyboardType='visible-password' placeholderTextColor={'#1F1F39'}  placeholder='Password'/>
                <Ionicons name="eye-off" size={18} color="#1F1F39" />
                
            </View>
            <Pressable onPress={()=>navigation.navigate('PhoneNumber')} style={styles.button}>
                <Text style={{fontSize:16,fontWeight:'500'}}>Create account</Text>
            </Pressable>
            <View style={{flexDirection:'row',marginTop:32}}>
             <CheckBox isChecked={checked} checkBoxColor='#B8B8D2' style={styles.check} onClick={()=>{setChecked(prev=>!prev)}}/>
             <Text style={{width:253,color:'#B8B8D2'}}>By creating an account you have to agree
                with our terms & condications.
                </Text>
            </View>
            <Text style={styles.loginText}>Already have an account？
                <Pressable onPress={()=>navigation.navigate('Login')}>
                    <Text style={{color:"#3D5CFF",fontWeight:'bold'}}>Login</Text>
                </Pressable>
            </Text>
        </View>
      </ScrollView>
    </View>
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

        
export default SignUp

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#F0F0F2'
    },
    body:{
        backgroundColor:'#FFFFFF',
    },
    signupText:{
        marginTop:60,
        fontWeight:'bold',
        fontSize:32,
        marginHorizontal:24,
        color:'#1F1F39'
        
    },
    detailsText:{
        marginLeft:24,
        color:'#B8B8D2',
        marginBottom:10
    },
    textInput:{
        marginHorizontal:24,
        marginTop:32,

    },
    inputField:{
        backgroundColor:'#B8B8D2',
        borderRadius:7,
        height:50,
        paddingLeft:10,
        color:'#1F1F39',
        width:'100%',
        marginTop:4
    },
    button:{
        backgroundColor:'#3D5CFF',
        alignItems:'center',
        justifyContent:'center',
        marginTop:32,
        height:50,
        borderRadius:7,
    },
    check:{
        marginRight:10,
        width:16,
        height:16
    },
    loginText:{
        textAlign:'center',
        marginTop:32,
        fontSize:12,
        color:'#858597'
    }

})