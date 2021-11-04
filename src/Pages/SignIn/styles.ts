import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  height: 70%;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const TitleWrapper = styled.View`
  text-align: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: white;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(24)}px;
  text-align: center;
  margin-top: ${RFValue(64)}px;
  margin-bottom: ${RFValue(64)}px;
`;

export const SignInTitle = styled.Text`
  color: white;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  text-align: center;
`;

export const Footer = styled.View`
  height: 30%;
  background-color: ${({ theme }) => theme.colors.secondary};
  align-items: center;
  justify-content: flex-start;
`;

export const FooterWrapper = styled.View`
  /* margin-top: ${RFPercentage(-5)}px; */
  margin-top: ${RFValue(-28)}px;
  padding: 0 32px;
  justify-content: space-between;
  width: 100%;
`;
