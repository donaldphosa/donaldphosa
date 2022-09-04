import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

const Search = () => {
  return (
    <SafeAreaProvider>
    <SafeAreaView>
        <View>
          <Text>Search</Text>
        </View>
    </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Search

const styles = StyleSheet.create({})