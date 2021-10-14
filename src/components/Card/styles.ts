import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

type Types = {
  type: "up" | "down" | "total";
};
export const Container = styled.View<Types>`
  width: ${RFValue(300)}px;
  height: ${RFValue(160)}px;
  background-color: ${({ theme, type }) =>
    type === "total" ? theme.colors.secondary : theme.colors.shape};
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

export const Title = styled.Text<Types>`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.black};
`;

export const Icon = styled(Feather)<Types>`
  font-size: ${RFValue(40)}px;
  color: ${({ theme, type }) =>
    type === "up"
      ? theme.colors.success
      : type === "down"
      ? theme.colors.attention
      : theme.colors.shape};
`;

export const Footer = styled.View`
  justify-content: center;
`;

export const Amount = styled.Text<Types>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.black};
`;

export const LastTransaction = styled.Text<Types>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.background : theme.colors.text};
`;
