import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native";

type Props = {
  active: boolean;
};

export const StyledInput = styled(TextInput)<Props>`
  background-color: ${({ theme }) => theme.colors.shape};
  width: 100%;
  padding: 16px 18px;
  margin-bottom: ${RFValue(8)}px;

  ${({ active, theme }) =>
    active &&
    css`
      border-width: 3px;
      border-color: ${theme.colors.attention};
    `}
`;
