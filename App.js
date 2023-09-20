import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Src/Screens/SplashScreen/SplashScreen';
import DetailsScreen from './Src/Screens/DetailsScreen/DetailsScreen';
import LoginScreen from './Src/Screens/LoginScreen/LoginScreen';
import SignUpScreen from './Src/Screens/SignUpScreen/SignUpScreen';
import ResetPassword from './Src/Screens/ResetPassword/ResetPassword';
import EnterOTP from './Src/Screens/EnterOTP/EnterOTP';
import Profile from './Src/Screens/Profile/Profile';
import Hobbies from './Src/Screens/Hobbies/Hobbies';
import Personality from './Src/Screens/Personality/Personality';
import ConfirmPasswords from './Src/Screens/ConfirmPassword/ConfirmPassword';
import MyTabs from './Src/BottomTabNavigation/BottomTabNavigation';
import UploadPost from './Src/Screens/UploadPost/UploadPosts'
import GotMatchPeople from './Src/Screens/GotMatchPeople/GotMatchPeople';
import SeeAllPosts from './Src/Screens/SeeAllPosts/SeeAllPosts';


const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name="MyTabs" component={MyTabs} options={{headerShown:false}} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{headerShown:false}} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown:false}} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{headerShown:false}} />
        <Stack.Screen name="EnterOTP" component={EnterOTP} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
        <Stack.Screen name="Personality" component={Personality} options={{headerShown:false}} />
        <Stack.Screen name="Hobbies" component={Hobbies} options={{headerShown:false}} />
        <Stack.Screen name="ConfirmPasswords" component={ConfirmPasswords} options={{headerShown:false}} />
        <Stack.Screen name="UploadPost" component={UploadPost} options={{headerShown:false}} /> 
        <Stack.Screen name="GotMatchPeople" component={GotMatchPeople} options={{headerShown:false}} /> 
        <Stack.Screen name="SeeAllPosts" component={SeeAllPosts} options={{headerShown:false}} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
