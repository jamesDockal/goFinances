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
  data: {
    title: string;
    amount: string;
    type: string;
    date: string;
    icon: string;
  };
};

export default function TransactionCard({ data }: Props) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount isNegative={data.amount[0] === "-"}>{data.amount}</Amount>

      <Footer>
        <CategoryContainer>
          <Icon name={data.icon} />
          <Category>{data.type}</Category>
        </CategoryContainer>

        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
