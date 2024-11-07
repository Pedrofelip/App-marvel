import { onAuthStateChanged } from "firebase/auth";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../../firebaseConfig";

type AuthContextType = {
  userId: string | null;
  isSignedIn: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  userId: "",
  isSignedIn: false,
});

const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [uid, setUid] = useState<string | null>(null);

  const authValue = {
    userId: uid,
    isSignedIn: uid !== null,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthentication = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthentication must be used within a AuthContextProvider",
    );
  }
  return context;
};

export default AuthContextProvider;
