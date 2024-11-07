import ComicItem from "@components/ComicItem";
import SeriesItem from "@components/SeriesItem";
import StoryItem from "@components/StoryItem";
import { CharacterModel } from "@models/CharacterModel";
import { RootStackParamList } from "@navigations/RootNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getCharacterById } from "@services/characterService";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Text, ActivityIndicator, Image, ScrollView, View } from "react-native";
import { FlatList } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "CharacterDetails">;

const CharacterDetailsScreen = ({ route }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<CharacterModel | null>(null);
  const { id } = route.params;

  useEffect(() => {
    async function loadData() {
      const item = await getCharacterById(id);
      setData(item);
      setIsLoading(false);
    }

    loadData();
  }, [id]);

  if (isLoading)
    return (
      <View className="flex-1 bg-darkblack items-center justify-center">
        <ActivityIndicator size={128} />
      </View>
    );

  return (
    <ScrollView className="flex-1 bg-darkblack">
      <StatusBar style="auto"></StatusBar>
      <Image source={{ uri: data?.thumbnailUrl }} className="w-full h-96" />
      <Text className="text-white font-bangers text-4xl mx-4 my-2">
        {data?.name}
      </Text>
      {data?.description && (
        <Text className="text-white mx-4">{data?.description}</Text>
      )}

      <Text className="text-white font-bangers text-2xl mx-4 mt-8">Comics</Text>
      <FlatList
        className="mx-4"
        horizontal={true}
        data={data?.comics}
        renderItem={(item) => <ComicItem {...item.item} />}
        keyExtractor={(item) => item.resourceURI}
        showsHorizontalScrollIndicator={false}
      />
      <Text className="text-white font-bangers text-2xl mx-4 mt-8">Series</Text>
      <FlatList
        className="mx-4"
        horizontal={true}
        data={data?.series}
        renderItem={(item) => <SeriesItem {...item.item} />}
        keyExtractor={(item) => item.resourceURI}
        showsHorizontalScrollIndicator={false}
      />
      <Text className="text-white font-bangers text-2xl mx-4 mt-8">
        Stories
      </Text>
      <FlatList
        className="mx-4"
        horizontal={true}
        data={data?.stories}
        renderItem={(item) => <StoryItem {...item.item} />}
        keyExtractor={(item) => item.resourceURI}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};
export default CharacterDetailsScreen;
