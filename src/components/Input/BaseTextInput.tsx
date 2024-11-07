import { TextInput, TextInputProps } from "react-native";

type Props = {} & TextInputProps;

const BaseTextInput = ({ className, ...props }: Props) => {
  return (
    <TextInput
      className={`w-96 ${className} py-2 px-4 bg-white font-bangers text-2xl border-4 border-solid`}
      {...props}
    />
  );
};

export default BaseTextInput;
