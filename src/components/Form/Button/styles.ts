import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
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
