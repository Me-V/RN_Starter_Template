import { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import "./global.css";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
