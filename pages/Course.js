import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

const Course = () => {
  return (
  <SafeAreaProvider>
    <SafeAreaView>
        <View>
          <Text>Course</Text>
        </View>
    </SafeAreaView>
  </SafeAreaProvider>
  )
}

export default Course

const styles = StyleSheet.create({})