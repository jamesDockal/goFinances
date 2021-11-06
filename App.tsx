import React from "react";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import { ThemeProvider } from "styled-components/native";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/Global/styles/theme";
import { AuthProvider } from "./src/hooks/Auth";
import Routes from "./src/routes";
import { StatusBar } from "react-native";

export default function App() {
  const [isLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <AuthProvider>
      <StatusBar barStyle="light-content" />
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  );
}
