import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const Container = styled(GestureHandlerRootView)`
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
  font-size: ${RFValue(18)}px;
`;

export const Form = styled.View`
  padding: 16px;
  flex: 1;
  justify-content: space-between;
`;

export const TransactionButtonContainer = styled.View`
  margin-top: ${RFValue(8)}px;
  flex-direction: row;
  justify-content: space-between;
`;
