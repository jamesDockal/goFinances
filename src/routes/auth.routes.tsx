import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import SignIn from "../Pages/SignIn";

const AuthRoutes: React.FC = () => {
  return (
    <Navigator>
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
};

export default AuthRoutes;
