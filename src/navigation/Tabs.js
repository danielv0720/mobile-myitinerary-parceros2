import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginForm from '../screens/LoginForm';
import Home from '../screens/Home';
import Cities from '../screens/Cities';
import City from '../screens/City';
import SignUp from '../screens/SignUp';
import Itineraries from '../screens/Itineraries';
import { AntDesign,MaterialCommunityIcons,SimpleLineIcons,MaterialIcons   } from '@expo/vector-icons'; 

const Tab =createBottomTabNavigator();

export default function MyTabs() {
  return (
      <Tab.Navigator
      initialRouteName='home'
      screenOptions={{
        tabBarActiveTintColor: ''
      }}>
                  <Tab.Screen name="SignUp"
           component={SignUp}
           options={{
            tabBarIcon:({color,size})=>(
              <MaterialIcons  name="app-registration" size={30} color={color} />
          )
        }} />
          <Tab.Screen name="Login"

           component={LoginForm}
           
           options={{
            tabBarIcon:({color,size})=>(
              <AntDesign name="login" size={30} color={color} />
          )
        }} />
          <Tab.Screen
           name="Home"
            component={Home}
            options={{
                tabBarIcon:({color,size})=>(
                <AntDesign name="home" size={30} color={color} />
              )
            }} />
          <Tab.Screen name="Cities"
           component={Cities}
           options={{
            tabBarIcon:({color,size})=>(
              <MaterialCommunityIcons name="city-variant-outline" size={30} color={color} />
          )
        }} />
          <Tab.Screen name="City"
           component={City}
           options={{
            tabBarIcon:({color,size})=>(
              <MaterialCommunityIcons name="home-city-outline" size={30} color={color} />
          )
        }} />
          <Tab.Screen name="Itineraries"
           component={Itineraries}
           options={{
            tabBarIcon:({color,size})=>(
              <SimpleLineIcons name="plane" size={30} color={color} />
          )
        }} />

      </Tab.Navigator>
  )
}