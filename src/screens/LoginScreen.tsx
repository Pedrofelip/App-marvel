import PrimaryButton from "@components/Button/PrimaryButton";
import TextButton from "@components/Button/TextButton";
import EmailInput from "@components/Input/EmailInput";
import PasswordInput from "@components/Input/PasswordInput";
import Marvel from "@components/Marvel";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, ImageBackground } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import {auth} from '../../firebaseConfig'

type Props = {} & NativeStackScreenProps<any>;

const LoginScreen = ({ navigation }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Signed in!')
      const user = userCredential.user;
      console.log(user)
      navigation.navigate('Home');
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  }

  return (
    <>
      <StatusBar style="light" />
      <ImageBackground
        className="flex-1 justify-center items-center gap-y-6"
        source={require("../../assets/spiderman.jpg")}
        resizeMode="cover"
      >
        <Marvel />
        <EmailInput onChangeText={(value) => setEmail(value)}/>
        <PasswordInput onChangeText={(value) => setPassword(value)}/>
        <PrimaryButton text="Entrar" onPress={handleSignIn}/>
        <TextButton text="Voltar" onPress={() => navigation.goBack()} />
      </ImageBackground>
      {isLoading && <ActivityIndicator />}
    </>
  );
};

export default LoginScreen;
