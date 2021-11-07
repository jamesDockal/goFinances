import React, { useState } from "react";
import { Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import LogoSvg from "../../assets/logo.svg";
import GoogleLogo from "../../assets/google.svg";
import AppleLogo from "../../assets/apple.svg";

import SignInSocialButton from "../../components/SignInSocialButton";

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";
import { useAuth } from "../../hooks/Auth";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

const SignIn: React.FC = () => {
  const [isloading, setIsloading] = useState(false);
  const { signInWithGoogle } = useAuth();
  const theme = useTheme();

  async function handleSignInWithGoogle() {
    try {
      setIsloading(true);
      return await signInWithGoogle();
    } catch (error) {
      console.log("error", error);
    }
    setIsloading(false);
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />
          <Title>
            Controle suas {"\n"} finanças de forma {"\n"} muito simples
          </Title>
        </TitleWrapper>
        <SignInTitle>
          Faça seu login com {"\n"} umas das contas abaixo
        </SignInTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            title="Entrar com conta do Google"
            svg={GoogleLogo}
            onPress={handleSignInWithGoogle}
          />
          {Platform.OS === "ios" && (
            <SignInSocialButton
              title="Entrar com conta da Apple"
              svg={AppleLogo}
            />
          )}
        </FooterWrapper>
        {isloading && (
          <ActivityIndicator
            color={theme.colors.shape}
            style={{
              marginTop: 18,
            }}
          />
        )}
      </Footer>
    </Container>
  );
};

export default SignIn;
