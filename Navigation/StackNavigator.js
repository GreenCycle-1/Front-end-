import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splashscreen from "../apps/tabs/Splashscreen.js"
import Loginscreen from "../app/(tabs)/Loginscreen.js";
const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
     <Stack.Screen name="Splash" component={Splashscreen} />
     <Stack.Screen name="login" component={Loginscreen} />
  
  </Stack.Navigator>
);

export default StackNavigator;