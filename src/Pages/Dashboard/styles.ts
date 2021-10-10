import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  backgroundColor: ${({ theme } )=> theme.colors.success };
`;

export const Title = styled.Text`
 fontSize: 18px;
 color: black;
 font-family: ${({theme}) => theme.fonts.medium};
`;
