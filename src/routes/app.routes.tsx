import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createBottomTabNavigator();

import Dashboard from "../Pages/Dashboard";
import Register from "../Pages/Register";

function AppRoutes() {
  return (
    <Navigator>
      <Screen name="Listagem" component={Dashboard} />
      <Screen name="Registro" component={Register} />
    </Navigator>
  );
}

export default AppRoutes;
