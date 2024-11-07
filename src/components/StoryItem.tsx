import { View, Text, Image } from "react-native";
type Props = {
  name: string;
};
const StoryItem = ({ name }: Props) => {
  return (
    <View>
      <Image
        source={require("../../assets/not-found3.jpg")}
        className="w-36 h-56 mr-4"
      />
      <Text className="text-white w-36">{name}</Text>
    </View>
  );
};
export default StoryItem;
