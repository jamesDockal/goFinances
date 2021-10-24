import React from "react";
import { categories } from "../../categories";
import {
  Container,
  Title,
  Amount,
  Footer,
  CategoryContainer,
  Icon,
  Category,
  Date,
} from "./styles.";

type Props = {
  data: {
    name: string;
    amount: string;
    type: "up" | "down";
    date: string;
    category: string;
  };
};

export default function TransactionCard({ data }: Props) {
  const { icon } = categories.filter(
    (category) => category.name === data.category
  )[0];

  return (
    <Container>
      <Title>{data.name}</Title>
      <Amount isNegative={data.type === "down"}>{data.amount}</Amount>

      <Footer>
        <CategoryContainer>
          <Icon name={icon} />
          <Category>{data.type}</Category>
        </CategoryContainer>

        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
