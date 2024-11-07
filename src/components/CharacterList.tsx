import { CharacterModel } from "@models/CharacterModel";
import CharacterItemCover from "./CharacterItemCover";
import { FlatList } from "react-native";

type Props = {
  list: CharacterModel[];
};

const CharacterList = ({ list }: Props) => {
  return (
    <FlatList
      horizontal={true}
      data={list}
      renderItem={(item) => <CharacterItemCover {...item.item} />}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CharacterList;
