import React from "react";
import { Control, Controller, useForm } from "react-hook-form";
import { TextInputProps } from "react-native";
import Input from "../Form/Input";

import { Container, Error } from "./styles";

interface Props extends TextInputProps {
  controller: Control;
  name: string;
  error?: string;
}

const InputForm: React.FC<Props> = ({ controller, name, error, ...rest }) => {
  return (
    <Container>
      <Controller
        control={controller}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default InputForm;
