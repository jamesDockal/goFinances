import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(115)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: flex-end;
  padding: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  color: white;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Form = styled.View`
  padding: 16px;
  flex: 1;
  justify-content: space-between;
`;

export const TransactionButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
