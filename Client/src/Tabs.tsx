import * as React from 'react';
import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';

import Welcom from './screeens/Welcom/Welcom';
import Login from './screeens/Login/Login';
import PasswordRecovery from './screeens/PasswordRecovery/PasswordRecovery';
import SignUp from './screeens/SignUp/SignUp';
import Home from "./screeens/Home/Home"
import SelectPerfil from './screeens/SelectPerfil/SelectPerfil';
import ProxVencer from './screeens/ProxVencer/ProxVencer';
import SinStock from './screeens/SinStock/SinStock';
import BarCodeScanner from "./screeens/BarCodeScanner/BarCodeScanner"


export type RootStackParamList = {
  Welcom: undefined;
  Login: undefined;
  SignUp: undefined;
  PasswordRecovery: undefined;
  SelectPerfil: undefined;
  Home: undefined;
  ProxVencer: undefined;
  SinStock: undefined;
  BarCodeScanner: undefined;
};
export type ScreenProp = StackNavigationProp<RootStackParamList>;
const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

function Tabs() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }}  name="Welcom" component={Welcom} />
     <Stack.Screen  name="Login" component={Login} />
     <Stack.Screen  name="SignUp" component={SignUp} />
     <Stack.Screen  name="PasswordRecovery" component={PasswordRecovery} />
     <Stack.Screen options={{ headerShown: false }} name="SelectPerfil" component={SelectPerfil} />
     <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
     <Stack.Screen options={{ headerShown: false }} name="ProxVencer" component={ProxVencer} />
     <Stack.Screen options={{ headerShown: false }} name="SinStock" component={SinStock} />
     <Stack.Screen options={{ headerShown: false }} name="BarCodeScanner" component={BarCodeScanner} />
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
