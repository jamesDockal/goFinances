import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

type ContainerProps = {
  color: string;
};

export const Container = styled.View<ContainerProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  flex-direction: row;
  justify-content: space-between;
  padding: ${RFValue(16)}px;
  border-radius: 12px;
  border-left-width: 5px;
  border-left-color: ${({ color }) => color};
  margin-bottom: ${RFValue(6)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Amount = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.medium};
`;
