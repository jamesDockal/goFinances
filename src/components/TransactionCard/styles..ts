import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

type Negative = {
  isNegative: boolean;
};

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 12px 16px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
`;

export const Amount = styled.Text<Negative>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
  color: ${({ theme, isNegative }) =>
    isNegative ? theme.colors.attention : theme.colors.success};
`;

export const Footer = styled.View`
  margin-top: ${RFValue(16)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CategoryContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  margin-right: ${RFValue(10)}px;
  font-size: ${RFValue(18)}px;
`;

export const Category = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(16)}px;
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(13)}px;
`;
