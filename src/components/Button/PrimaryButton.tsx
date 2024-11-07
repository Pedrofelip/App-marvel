import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = {
  text: string;
} & TouchableOpacityProps;

const PrimaryButton = ({ className, text, ...props }: Props) => {
  return (
    <TouchableOpacity
      className={`${className} bg-fiap p-4 rounded-lg w-64`}
      {...props}
    >
      <Text className="text-white text-center font-bangers text-2xl">
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
