import { Text, Pressable, PressableProps } from "react-native";

type Props = {
  text: string;
} & PressableProps;

const TextButton = ({ className, text, ...props }: Props) => {
  return (
    <Pressable {...props}>
      <Text
        className={`text-2xl ${className} text-white font-bangers`}
        style={{
          textShadowColor: "rgba(0, 0, 0, 0.8)",
          textShadowOffset: { width: 2, height: 2 },
          textShadowRadius: 4,
        }}
      >
        {text}&nbsp;
      </Text>
    </Pressable>
  );
};

export default TextButton;
