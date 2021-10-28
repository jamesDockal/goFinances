import React from "react";

import { Container, Title, Amount } from "./styles";

type Props = {
  color: string;
  text: string;
  amount: string;
};

function HisotryCard({ text, amount, color }: Props) {
  return (
    <Container color={color}>
      <Title>{text}</Title>
      <Amount>{amount}</Amount>
    </Container>
  );
}

export default HisotryCard;
