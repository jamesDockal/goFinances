import React from "react";
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
  title: string;
  amount: string;
  type: string;
  date: string;
  icon: string;
};

export default function TransactionCard({
  title,
  amount,
  date,
  type,
  icon,
}: Props) {
  console.log("category", amount[0]);

  return (
    <Container>
      <Title>{title}</Title>
      <Amount isNegative={amount[0] === "-"}>{amount}</Amount>

      <Footer>
        <CategoryContainer>
          <Icon name={icon} />
          <Category>{type}</Category>
        </CategoryContainer>

        <Date>{date}</Date>
      </Footer>
    </Container>
  );
}
