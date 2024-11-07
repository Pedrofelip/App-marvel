import { TextInputProps } from "react-native";
import BaseTextInput from "./BaseTextInput";

type Props = {} & TextInputProps;

const EmailInput = ({
  placeholder,
  keyboardType,
  autoCapitalize,
  autoCorrect,
  ...props
}: Props) => {
  if (!placeholder) placeholder = "Digite seu e-mail";

  return (
    <BaseTextInput
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType="email-address"
      placeholder={placeholder}
      {...props}
    />
  );
};
export default EmailInput;
