import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>hi there</Text>
        
      </View>
      <Link href="../about" style={styles.linktext}> go to about</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',

  },
  box: {
    backgroundColor: 'dodgerblue',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  linktext: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
})