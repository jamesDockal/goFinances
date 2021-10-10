import React from "react";
import { ThemeProvider } from "styled-components/native";

import theme from "./src/Global/styles/theme";
import Dashboard from "./src/Pages/Dashboard";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
