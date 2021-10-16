import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Icon, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  type: "up" | "down";
  isSelected: boolean;
}
const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};
const TransactionButton: React.FC<Props> = ({
  title,
  type,
  isSelected,
  ...rest
}) => {
  return (
    <Container isSelected={isSelected} type={type} {...rest}>
      <Icon name={icon[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  );
};

export default TransactionButton;
