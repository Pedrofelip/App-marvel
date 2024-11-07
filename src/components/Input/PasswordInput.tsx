import { TextInputProps } from "react-native";
import BaseTextInput from "./BaseTextInput";

type Props = {} & TextInputProps;

const PasswordInput = ({
  keyboardType,
  autoCapitalize,
  autoCorrect,
  placeholder,
  secureTextEntry,
  ...props
}: Props) => {
  if (!placeholder) placeholder = "Digite sua senha";

  return (
    <BaseTextInput
      {...props}
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={true}
      placeholder={placeholder}
    />
  );
};

export default PasswordInput;
