import React from "react";
import { TextInputProps } from "react-native";
import { StyledInput } from "./styles";

type Props = TextInputProps;

function Input({ ...rest }: Props) {
  return <StyledInput {...rest} />;
}

export default Input;
