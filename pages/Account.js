import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React,{ useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker'


const Account = () => {
  const [image, setImage] = useState(null);

  

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={{color:'#1F1F39',fontWeight:'bold',fontSize:24}}>Account</Text>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={image?{uri:image}:require('../assets/images/avater.png')}/>
            <Pressable onPress={()=>pickImage()} style={styles.camera}>
              <Ionicons name='camera' size={24} color='#fff'/>
            </Pressable>
          </View>
            <Pressable style={styles.setting}>
              <Text style={styles.settingText}>Favourite</Text>
              <Ionicons name='star' size={18} color='#1F1F39'/>
            </Pressable>
            <Pressable style={styles.setting}>
              <Text style={styles.settingText}>Edit Account</Text>
              <Ionicons name='pencil' size={18} color='#1F1F39'/>
            </Pressable>
            <Pressable style={styles.setting}>
              <Text style={styles.settingText}>Settings and Privacy</Text> 
              <Ionicons name='settings' size={18} color='#1F1F39'/>
            </Pressable>
            <Pressable style={styles.setting}>
              <Text style={styles.settingText}>Help</Text>
              <Ionicons name='help' size={18} color='#1F1F39'/>
            </Pressable>
              
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Account

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:'#fff',
    paddingHorizontal:10,
    paddingTop:40
  },
  imageContainer:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:40
  },
  image:{
    width:100,
    height:100,
    borderRadius:100,
    shadowOpacity:0.55,
    shadowColor:'gray'
  },
  camera:{
    backgroundColor:'#3D5CFF',
    width:35,
    height:35,
    borderRadius:100,
    padding:2,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    bottom:-5,
    right:'38%',
    zIndex:100
  },
  settingText:{
    color:'#1F1F39',
    fontWeight:'600',
    fontSize:16,
    opacity:0.8
  },
  setting:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%',
    marginBottom:23,
    paddingRight:10
  }
})