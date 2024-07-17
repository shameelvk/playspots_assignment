import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import LikeContextWrap from './src/context/Liked';
import LikedVinueScreen from './src/screens/LikedVinueScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <LikeContextWrap>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Like" component={LikedVinueScreen} />
        </Tab.Navigator>
      </LikeContextWrap>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})