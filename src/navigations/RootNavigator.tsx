import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CharacterDetailsScreen from "@screens/CharacterDetailsScreen";
import HomeScreen from "@screens/HomeScreen";
import LoginScreen from "@screens/LoginScreen";
import MainScreen from "@screens/MainScreen";
import SignUpScreen from "@screens/SignUpScreen";
import { useAuthentication } from "@store/AuthContext";
import React from "react";

export type RootStackParamList = {
  Main: undefined;
  Home: undefined;
  SignUp: undefined;
  Login: undefined;
  CharacterDetails: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const noHeader = {
  headerShown: false,
};

type Props = {};

const RootNavigator = (props: Props) => {
  const { isSignedIn } = useAuthentication();

  return (
    <Stack.Navigator initialRouteName="Main">
      {!isSignedIn && (
        <>
          <Stack.Screen name="Main" component={MainScreen} options={noHeader} />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={noHeader}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={noHeader}
          />
        </>
      )}
      {isSignedIn && (
        <>
          <Stack.Screen name="Home" component={HomeScreen} options={noHeader} />
          <Stack.Screen
            name="CharacterDetails"
            component={CharacterDetailsScreen}
            options={noHeader}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;
