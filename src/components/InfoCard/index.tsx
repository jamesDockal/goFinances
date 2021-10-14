import React from "react";
import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from "./styles";

type Props = {
  type: "up" | "down" | "total";
  title: string;
  amount: string;
  lastEntry: string;
};

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
};

export default function InfoCard({ amount, lastEntry, title, type }: Props) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon type={type} name={icon[type]} />
      </Header>
      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastEntry}</LastTransaction>
      </Footer>
    </Container>
  );
}
