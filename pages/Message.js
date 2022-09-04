import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

const Message = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
          <View>
            <Text>Message</Text>
          </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Message

const styles = StyleSheet.create({})