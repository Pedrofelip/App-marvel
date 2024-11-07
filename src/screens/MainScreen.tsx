import PrimaryButton from "@components/Button/PrimaryButton";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "@navigations/RootNavigator";
import Marvel from "@components/Marvel";

type Props = NativeStackScreenProps<RootStackParamList, "Main">;

const MainScreen = ({ navigation }: Props) => {
  return (
    <>
      <StatusBar style="light" />
      <ImageBackground
        className="flex-1 justify-center items-center"
        source={require("../../assets/background.jpg")}
        resizeMode="cover"
      >
        <Marvel />
        <PrimaryButton
          className="mb-4"
          text="Login"
          onPress={() => navigation.navigate("Login")}
        />
        <PrimaryButton
          text="Cadastrar"
          onPress={() => navigation.navigate("SignUp")}
        />
      </ImageBackground>
    </>
  );
};
export default MainScreen;
