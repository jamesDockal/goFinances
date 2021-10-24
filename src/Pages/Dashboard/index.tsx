import React, { useEffect, useState } from "react";
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
import AsyncStorage from "@react-native-async-storage/async-storage";

type Transaction = {
  price: string;
  name: string;
  date: string;
  category: string;
  type: string;
};

export default function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function getTransactions() {
    const storageKey = "@gofinances:transactions";
    const data = await AsyncStorage.getItem(storageKey);

    const formattedData: Transaction[] = JSON.parse(data!)?.map(
      (item: Transaction) => {
        const amount = item.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        });

        const date = Intl.DateTimeFormat("pt-br", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }).format(new Date());

        return {
          name: item.name,
          amount,
          date,
          type: item.type,
          category: item.category,
        };
      }
    );

    setTransactions(formattedData);
  }

  useEffect(() => {
    getTransactions();
  }, []);

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
      </CardContainer>
      <TransactionsCardsContainer>
        <ListTitle>Listagem</ListTitle>

        <TransactionsCardsList
          data={transactions}
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
