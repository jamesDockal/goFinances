import React from "react";
import { TextInputProps } from "react-native";
import { StyledInput } from "./styles";

interface Props extends TextInputProps {
  active?: boolean;
}

function Input({ active = false, ...rest }: Props) {
  return <StyledInput active={active} {...rest} />;
}

export default Input;
