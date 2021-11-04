import styled from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(115)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  padding: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  color: white;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
`;

export const HistoryContainer = styled.ScrollView`
  padding: ${RFValue(16)}px;
`;

export const MonthContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const MonthButton = styled.TouchableOpacity``;

export const MonthIcon = styled(Feather)`
  font-size: ${RFValue(26)}px;
`;

export const Month = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
