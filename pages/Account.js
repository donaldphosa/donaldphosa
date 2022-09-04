import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

const Account = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>Account</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Account

const styles = StyleSheet.create({})