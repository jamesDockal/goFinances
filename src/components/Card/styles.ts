import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  width: ${RFValue(300)}px;
  height: ${RFValue(160)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: 19px 23px;
  justify-content: space-between;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.black};
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.success};
  font-size: ${RFValue(40)}px;
`;

export const Footer = styled.View`
  justify-content: center;
`;

export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
`;

export const LastTransaction = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
`;
