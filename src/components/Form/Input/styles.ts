import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const StyledInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.shape};
  width: 100%;
  padding: 16px 18px;
  margin-bottom: ${RFValue(8)}px;
`;
