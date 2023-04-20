import React from 'react';
import {View,Text,StyleSheet} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
import Home from './src/Home';
import Details from './src/Details';
import trial from './src/trial'
const Stack = createStackNavigator()

function Mystack(){
  return(
    <Stack.Navigator>
      {/* <Stack.Screen name='trial' component={trial} /> */}
     <Stack.Screen name='Home' component={Home} options={{headerShown:true,
          headerStyle: {
            backgroundColor: '#3b3838', 
        },
        headerLeft:()=><Icon name='home-sharp' color='#fff' size={30} style={{marginLeft:10}}/>,
        headerTitleStyle: {
          color: '#fff',
          marginLeft:100
        }
    }}/>
     <Stack.Screen name='Details' component={Details} options={{headerShown:true,
        headerStyle: {
          backgroundColor: '#3b3838', 
      },
      headerLeft:()=><Icon name='home-sharp' color='#fff' size={30} style={{marginLeft:10}}/>,
      headerTitleStyle: {
        color: '#fff',
        marginLeft:100
      }
    }}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Mystack/>
    </NavigationContainer>
  );
};


const Styles = StyleSheet.create({
 
});


