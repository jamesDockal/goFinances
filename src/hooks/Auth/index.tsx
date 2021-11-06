import React, { createContext, useContext, useEffect, useState } from "react";
import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
  id: string;
  name: string;
  email: string;
  picture: string;
};

type IAuthContext = {
  user: User;
  signInWithGoogle(): Promise<void>;
  logOut(): Promise<void>;
};

type AuthorizationResponse = {
  type: string;
  params: {
    access_token: string;
  };
};

const AuthContext = createContext({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);
  const key = "@gofinances:user";

  useEffect(() => {
    AsyncStorage.getItem(key).then((user) => {
      user && setUser(JSON.parse(user));
    });
  }, []);

  async function signInWithGoogle() {
    try {
      const { CLIENT_ID } = process.env;
      const { REDIRECT_URI } = process.env;
      const responseType = "token";
      const scope = encodeURI("profile email");

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${responseType}&scope=${scope}`;

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );
        const userInfo = await response.json();

        const loggedUser = {
          email: userInfo.email,
          name: userInfo.name,
          id: userInfo.id,
          picture: userInfo.picture,
        };
        setUser(loggedUser);

        await AsyncStorage.setItem(key, JSON.stringify(loggedUser));
      }
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async function logOut() {
    setUser({} as User);
    await AsyncStorage.removeItem(key);
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
