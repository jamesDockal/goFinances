import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

type Type = {
  type: "up" | "down";
};

type ContainerProps = {
  isSelected: boolean;
  type: "up" | "down";
};

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 48%;

  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: row;

  padding: 12px;

  ${({ type, isSelected }) =>
    isSelected &&
    type === "up" &&
    css`
      background-color: ${({ theme }) => theme.colors.success_light};
      border: none;
    `};
  ${({ type, isSelected }) =>
    isSelected &&
    type === "down" &&
    css`
      background-color: ${({ theme }) => theme.colors.attention_light};
      border: none;
    `};
`;

export const Icon = styled(Feather)<Type>`
  font-size: 19px;
  margin-right: 8px;
  color: ${({ type, theme }) =>
    type === "up" ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 16.5px;
`;
