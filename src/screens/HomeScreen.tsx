import { ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { cssInterop } from "nativewind";
import Marvel from "@components/Marvel";
import CharacterListBySeries from "@components/CharacterListBySeries";
import SectionTitle from "@components/Text/SectionTitle";
import {auth} from '../../firebaseConfig'

import { signOut } from 'firebase/auth';

cssInterop(Ionicons, {
  className: {
    target: "style",
    nativeStyleToProp: {
      color: true,
    },
  },
});

type Props = {};

const HomeScreen = (props: Props) => {

  const logout = () => {
    signOut(auth).then(function(){
      console.log('success');
      navigation.navigate('Login');
  },function(){})
  }

  

  return (
    <SafeAreaView className="flex-1 bg-darkblack px-4">
      <StatusBar style="light" />
      <ScrollView>
        <View className="items-end top-4 right-4 absolute">
          <Ionicons name="log-out-outline" size={32} className="text-white" onPress={logout}/>
        </View>
        <Marvel size="small" />
        <SectionTitle className="my-4">Ultimate</SectionTitle>
        <CharacterListBySeries series={[702]} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
