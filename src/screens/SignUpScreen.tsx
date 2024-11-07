import PrimaryButton from "@components/Button/PrimaryButton";
import TextButton from "@components/Button/TextButton";
import EmailInput from "@components/Input/EmailInput";
import PasswordInput from "@components/Input/PasswordInput";
import Marvel from "@components/Marvel";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ImageBackground } from "react-native";

import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

import {auth} from '../../firebaseConfig'

type Props = {} & NativeStackScreenProps<any>;

const SignUpScreen = ({ navigation }: Props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Account created!')
      const user = userCredential.user;
      console.log(user)
      Alert.alert("usuario criado com sucesso!")
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
        source={require("../../assets/EmptyHero.jpg")}
        resizeMode="cover"
      >
        <Marvel />
        <EmailInput onChangeText={(value) => setEmail(value)}/>
        <PasswordInput onChangeText={(value) => setPassword(value)}/>
        <PrimaryButton text="Cadastrar" onPress={handleCreateAccount}/>
        <TextButton text="Voltar" onPress={() => navigation.goBack()} />
      </ImageBackground>
    </>
  );
};

export default SignUpScreen;
