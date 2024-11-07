import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyC4Z7uUcLI_dxVu4kwJbmKw1NXyuCXz1bY",
  authDomain: "tdspx-2024.firebaseapp.com",
  projectId: "tdspx-2024",
  storageBucket: "tdspx-2024.appspot.com",
  messagingSenderId: "1066730908084",
  appId: "1:1066730908084:web:090dc4c89fdd240eef6ae1",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth };
