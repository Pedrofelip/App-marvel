import { Text, TextProps } from "react-native";

type Props = {} & TextProps;

const SectionTitle = ({ children, className, ...props }: Props) => {
  return (
    <Text
      className={`${className} font-bangers text-5xl text-white`}
      {...props}
    >
      {children}
    </Text>
  );
};
export default SectionTitle;
