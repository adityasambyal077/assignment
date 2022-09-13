import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from './src/screens/home/home';
import Model from './src/screens/model/model';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown:false, tabBarStyle:{
        backgroundColor:'black',
        paddingHorizontal:20,
        height:100
      }, tabBarLabel:()=>{null}}}>


        <Tab.Screen options={{tabBarIcon:()=>(
          <MaterialIcons name="home" size={35} color='white'/>)
        }}  name='HOME' component={Home} />


        <Tab.Screen name="cool" component={Model} options={{tabBarIcon:()=>(
          <FontAwesome5  name='shopping-cart' size={23} color='white' />
        )}} />


        <Tab.Screen name="Settings" component={SettingsScreen} options={{tabBarIcon:()=>(
          <AntDesign  name='message1' size={23} color='white' />
        )}} />


        <Tab.Screen name="Profile" component={Profile} options={{tabBarIcon:()=>(
          <AntDesign  name='user' size={23} color='white' />
        )}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}