import React, { useEffect, useState, useCallback } from "react";
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
import { useFocusEffect } from "@react-navigation/core";

type Transaction = {
  price: number;
  name: string;
  date: string;
  category: string;
  type: "up" | "down";
};

type TransactionAmount = {
  total: string;
  entries: string;
  saidas: string;
};

export default function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [transactionAmount, setTransactionAmount] = useState<TransactionAmount>(
    {} as TransactionAmount
  );

  async function getTransactions() {
    const storageKey = "@gofinances:transactions";
    const data = await AsyncStorage.getItem(storageKey);

    let total = 0;
    let entries = 0;
    let saidas = 0;

    const formattedData: Transaction[] = JSON.parse(data!)?.map(
      (item: Transaction) => {
        if (item.type === "up") {
          entries += item.price;
          total += item.price;
        }
        if (item.type === "down") {
          saidas -= item.price;
          total -= item.price;
        }

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
    setTransactionAmount({
      entries: entries.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      }),
      total: total.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      }),
      saidas: saidas.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      }),
    });
  }

  useEffect(() => {
    getTransactions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      getTransactions();
    }, []),
    []
  );

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
          amount={transactionAmount.entries}
          lastEntry="Última entrada dia 13 de outubro"
          type="up"
        />
        <InfoCard
          title="Saidas"
          amount={transactionAmount.saidas}
          lastEntry="Última entrada dia 13 de outubro"
          type="down"
        />
        <InfoCard
          title="Total"
          amount={transactionAmount.total}
          lastEntry="Última entrada dia 13 de outubro"
          type="total"
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
