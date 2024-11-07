import { RootStackParamList } from "@navigations/RootNavigator";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, Image, StyleSheet, Pressable } from "react-native";

type Props = {
  id: number;
  thumbnailUrl: string;
  name: string;
};

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "CharacterDetails"
>;
type ProfileScreenNavigationProp = ScreenProps["navigation"];

const CharacterItemCover = ({ id, thumbnailUrl, name }: Props) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return (
    <Pressable
      className="relative mx-2"
      onPress={() => navigation.navigate("CharacterDetails", { id: id })}
    >
      <Image source={{ uri: thumbnailUrl }} className="w-36 h-56" />
      <Text
        className="absolute text-white font-bangers mr-2 mb-2 bottom-0 right-0 text-right w-32 text-2xl"
        style={styles.textShadow}
      >
        {name}
      </Text>
    </Pressable>
  );
};

export default CharacterItemCover;

const styles = StyleSheet.create({
  textShadow: {
    textShadowColor: "rgba(0, 0, 0, 0.8)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
});
