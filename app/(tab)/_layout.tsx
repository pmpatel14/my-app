import { FontAwesome } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const TabRoot = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{title: 'HomeS' ,  tabBarIcon: ({ color }) => <FontAwesome name="home" size={24} color={color} />}}/>

      <Tabs.Screen 
  name="about" 
  options={{ 
    title: 'About', 
    tabBarIcon: ({ color, size }) => {
      return (
        <View style={{ backgroundColor: 'red', padding: 10, height:60,width:60 ,borderRadius: 50,bottom: 20, justifyContent: 'center', alignItems: 'center' }}>
          <FontAwesome name="plus" size={size} color={'#fff'} />
        </View>
      );
    }
  }} 
/>


      <Tabs.Screen name="profile" options={{title: 'Profile', tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />}} />
    </Tabs>
  )
}

export default TabRoot