import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TelaAnime  from "../screens/TelaAnime";
import TelaExp from "../screens/TelaExp";

import TelaManga from "../screens/TelaManga";
import TelaLogin from "../screens/TelaLogin";


const StackNavigator = createStackNavigator();

const StackTelas = () => {
 return(
 <StackNavigator.Navigator initialRouteName="TelaLogin" screenOptions={{headerShown:false}}>
  <StackNavigator.Screen name = "TelaLogin" component={TelaLogin}/>
  <StackNavigator.Screen name = "TelaExp" component={TelaExp}/>
  <StackNavigator.Screen name = "TelaManga" component={TelaManga}/>
  <StackNavigator.Screen name = "TelaAnime" component={TelaAnime}/>


 </StackNavigator.Navigator>
 ) 
}
export default StackTelas 





