import { Image, View } from "react-native";

type Props = {
  size?: "big" | "small";
};

const Marvel = ({ size }: Props) => {
  const dimensions = size === "small" ? "w-32 h-12 mb-4" : "w-64 h-24 mb-4";
  return (
    <View className="justify-center items-center mt-4">
      <Image
        className={dimensions}
        source={require("../../assets/marvel.png")}
      />
    </View>
  );
};

export default Marvel;
