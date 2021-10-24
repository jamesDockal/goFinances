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
import Dashboard from "./src/Pages/Dashboard";
import Register from "./src/Pages/Register";
import AppRoutes from "./src/routes/app.routes";

import { NavigationContainer } from "@react-navigation/native";

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
    <ThemeProvider theme={theme}>
      {/* <Dashboard /> */}
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
