import React from "react";
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  UserImage,
  User,
  Greeting,
  UserName,
  Power,
  CardContainer,
  TransactionsCardsContainer,
  ListTitle,
  TransactionsCardsList,
} from "./styles";

import Image from "../../../assets/teste.jpg";
import TransactionCard from "../../components/TransactionCard";
import InfoCard from "../../components/InfoCard";

export default function Dashboard() {
  const items = [
    {
      amount: "R$ 12.000,00",
      title: "Desenvolvimento de Site",
      date: "13/04/2020",
      icon: "dollar-sign",
      type: "Vendas",
    },
    {
      amount: "- R$ 59,00",
      title: "Hamburgeuria Pizzy",
      date: "13/04/2020",
      icon: "coffee",
      type: "Alimentação",
    },
    {
      amount: "- R$ 59,00",
      title: "Hamburgeuria Pizzy",
      date: "13/04/2020",
      icon: "coffee",
      type: "Alimentação",
    },
    {
      amount: "- R$ 59,00",
      title: "Hamburgeuria Pizzy",
      date: "13/04/2020",
      icon: "coffee",
      type: "Alimentação",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserImage source={Image} />
            <User>
              <Greeting>Olá, </Greeting>
              <UserName>James</UserName>
            </User>
          </UserInfo>

          <Power name="power" />
        </UserWrapper>
      </Header>
      <CardContainer>
        <InfoCard
          title="Entradas"
          amount="R$ 17.400,00"
          lastEntry="Última entrada dia 13 de outubro"
          type="up"
        />

        <InfoCard
          title="Saidas"
          amount="R$ 12.590,00"
          lastEntry="Última entrada dia 3 de Abril"
          type="down"
        />

        <InfoCard
          title="Total"
          amount="R$ 16.141,00"
          lastEntry="01 a 16 de Abril"
          type="total"
        />
      </CardContainer>
      <TransactionsCardsContainer>
        <ListTitle>Listagem</ListTitle>

        <TransactionsCardsList
          data={items}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            {
              // paddingBottom: {}
            }
          }
          renderItem={({ item }: any) => (
            <TransactionCard key={item.title} data={item} />
          )}
        />
      </TransactionsCardsContainer>
    </Container>
  );
}
