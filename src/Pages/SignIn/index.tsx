import React from "react";
import { RFValue } from "react-native-responsive-fontsize";

import LogoSvg from "../../assets/logo.svg";
import GoogleLogo from "../../assets/apple.svg";
import AppleLogo from "../../assets/google.svg";

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

const SignIn: React.FC = () => {
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
          />
          <SignInSocialButton
            title="Entrar com conta da Apple"
            svg={AppleLogo}
          />
        </FooterWrapper>
      </Footer>
    </Container>
  );
};

export default SignIn;
