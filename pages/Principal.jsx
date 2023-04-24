import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {ScrollView, NativeBaseProvider} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';1
import SearchBar from "../components/Searchbar";
import 'react-native-gesture-handler';
//import Post from "../components/Post"
//import Profile from './Profile';
import Chats from './Chats';
//import ChatScreen from './ChatScreen';
//import Follow from './Follow';
//import axios from 'axios';
//import { Button } from 'react-native-elements';

export default function Principal() {

const Tab = createMaterialBottomTabNavigator();

return (
    <Tab.Navigator 
      activeColor="#FFF"
      barStyle={{ backgroundColor: '#6B123C' }}
    >
    <Tab.Screen 
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons 
            name="home" 
            color={color} 
            size={26} 
          />
        ),
      }}
    />
    <Tab.Screen 
      name="Chats" 
      component={Chats} 
      options={{
        tabBarLabel: 'Chats',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons 
            name="chat"
            color={color} 
            size={26} 
          />
        ),
      }}
    />
    <Tab.Screen 
      name="Seguidos" 
      component={Seguidos} 
      options={{
        tabBarLabel: 'Seguidos',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons 
            name="account-plus" 
            color={color} size={26}
          />
        ),
      }}
    />
    <Tab.Screen 
      name="Notificaciones" 
      component={Notificaciones} 
      options={{
        tabBarLabel: 'Updates',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons 
            name="bell" 
            color={color} 
            size={26} 
          />
        ),
      }}
    />
    <Tab.Screen 
      name="Guardados" 
      component={Guardados} 
      options={{
        tabBarLabel: 'Save',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons 
            name="archive" 
            color={color} 
            size={26} 
          />
        ),
      }}
    />
    <Tab.Screen 
      name="Cuenta" 
      component={Cuenta} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons 
            name="account" 
            color={color} 
            size={26} 
          />
        ),
      }}
    /> 
    </Tab.Navigator>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 10,
  position: 'relative',
  backgroundColor: "#332E34",
  flexDirection: 'column',
  height: '90%'
},
})