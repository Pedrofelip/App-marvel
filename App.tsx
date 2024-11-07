import { NavigationContainer } from "@react-navigation/native";
import { Bangers_400Regular, useFonts } from "@expo-google-fonts/bangers";
import "@styles/global.css";
import RootNavigator from "@navigations/RootNavigator";
import AuthContextProvider from "@store/AuthContext";

export default function App() {
  const [loaded, error] = useFonts({ Bangers_400Regular });

  if (!loaded && !error) return null;

  return (
    <AuthContextProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthContextProvider>
  );
}
