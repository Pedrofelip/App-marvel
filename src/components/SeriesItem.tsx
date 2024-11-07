import { View, Text, Image } from "react-native";
type Props = {
  name: string;
};
const SeriesItem = ({ name }: Props) => {
  return (
    <View>
      <Image
        source={require("../../assets/not-found2.jpg")}
        resizeMode="contain"
        className="w-32 h-56 mr-4"
      />
      <Text className="text-white w-36">{name}</Text>
    </View>
  );
};
export default SeriesItem;
