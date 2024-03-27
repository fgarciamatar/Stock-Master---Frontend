import * as React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';

import Welcom from './screeens/Welcom/Welcom';
import Login from './screeens/Login/Login';
import SignUp from './screeens/SignUp/SignUp';
import Home from "./screeens/Home/Home"
export type RootStackParamList = {
  Welcom: undefined;
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
};
export type ScreenProp = StackNavigationProp<RootStackParamList>;
const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

function Tabs() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Welcom" component={Welcom} />
     <Stack.Screen  name="Login" component={Login} />
     <Stack.Screen  name="SignUp" component={SignUp} />
     <Stack.Screen  name="Home" component={Home} />
   </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerScreen: {
    backgroundColor: '#D0BBFD',
    borderWidth: 1,
    borderColor: '#AA84FC',
  },
});

export default Tabs;
