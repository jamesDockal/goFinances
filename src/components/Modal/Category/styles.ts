import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type Selected = {
  isSelected: boolean;
};

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const List = styled.FlatList``;

export const Row = styled.Pressable<Selected>`
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.secondary : theme.colors.shape};
  flex-direction: row;
  padding: 12px;
`;

export const Icon = styled(Feather)`
  font-size: 22px;
  margin-right: 8px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16.5px;
`;

export const Pressable = styled.Pressable`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 16px;
  border-radius: 6px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: white;
  font-size: 17px;
`;

export const Separator = styled.View`
  background: ${({ theme }) => theme.colors.text};
  width: 100%;
  height: 1px;
`;
