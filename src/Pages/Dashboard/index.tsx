import React, { useEffect, useState, useCallback } from "react";
import { ActivityIndicator } from "react-native";
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
  LoadingContainer,
  PowerContainer,
} from "./styles";

import Image from "../../assets/teste.jpg";
import TransactionCard from "../../components/TransactionCard";
import InfoCard from "../../components/InfoCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/core";
import { useTheme } from "styled-components";
import { useAuth } from "../../hooks/Auth";
type Transaction = {
  price: number;
  name: string;
  date: string;
  category: string;
  type: "up" | "down";
};

type FormattedTransactions = {
  total: {
    amount: string;
    lastTransaction: string;
  };
  entries: {
    amount: string;
    lastTransaction: string;
  };
  saidas: {
    amount: string;
    lastTransaction: string;
  };
};

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [formattedTransactions, setFormattedTransactions] =
    useState<FormattedTransactions>({} as FormattedTransactions);

  const theme = useTheme();
  const { user, logOut } = useAuth();
  const storageKey = `@gofinances:transactions_user:${user.id}`;

  function getLastTransactionDate(
    collection: Transaction[],
    type: "up" | "down"
  ) {
    const lastTransaction: Date = new Date(
      Math.max.apply(
        Math,
        collection
          .filter((transaction) => transaction.type === type)
          .map((transaction) => new Date(transaction.date).getTime())
      )
    );

    return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString(
      "pt-BR",
      {
        month: "long",
      }
    )}`;
  }

  async function getTransactions() {
    const savedData = await AsyncStorage.getItem(storageKey);
    const data: Transaction[] = JSON.parse(savedData!);

    if (!data) {
      return setIsLoading(false);
    }

    let total = 0;
    let entries = 0;
    let saidas = 0;

    const formattedData: any[] = data?.map((item: Transaction) => {
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
    });

    setTransactions(formattedData);

    setFormattedTransactions({
      entries: {
        amount: entries.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        }),
        lastTransaction: getLastTransactionDate(data, "up"),
      },
      saidas: {
        amount: saidas.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        }),
        lastTransaction: getLastTransactionDate(data, "down"),
      },
      total: {
        amount: total.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        }),
        lastTransaction: `de 1 a ${getLastTransactionDate(data, "up")}`,
      },
    });
    setIsLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      getTransactions();
    }, [])
  );

  return (
    <Container>
      {isLoading ? (
        <LoadingContainer>
          <ActivityIndicator color={theme.colors.primary} />
        </LoadingContainer>
      ) : (
        <>
          <Header>
            <UserWrapper>
              <UserInfo>
                <UserImage source={{ uri: user.picture }} />
                <User>
                  <Greeting>Olá, </Greeting>
                  <UserName>{user.name}</UserName>
                </User>
              </UserInfo>

              <PowerContainer
                onPress={() => {
                  logOut();
                }}
              >
                <Power name="power" onPre />
              </PowerContainer>
            </UserWrapper>
          </Header>
          <CardContainer>
            <InfoCard
              title="Entradas"
              amount={formattedTransactions?.entries?.amount || "R$ 0,00"}
              lastEntry={
                formattedTransactions?.entries?.lastTransaction
                  ? `Última Transação em ${formattedTransactions?.entries?.lastTransaction}`
                  : "Ainda Sem Entradas"
              }
              type="up"
            />
            <InfoCard
              title="Saidas"
              amount={formattedTransactions?.saidas?.amount || "R$ 0,00"}
              lastEntry={
                formattedTransactions?.saidas?.lastTransaction
                  ? `Última Saida em ${formattedTransactions?.saidas?.lastTransaction}`
                  : "Ainda Sem Saidas"
              }
              type="down"
            />
            <InfoCard
              title="Total"
              amount={formattedTransactions?.total?.amount}
              lastEntry={`Total de entrada de ${formattedTransactions?.total?.lastTransaction}`}
              type="total"
            />
          </CardContainer>
          <TransactionsCardsContainer>
            <ListTitle>Listagem</ListTitle>

            <TransactionsCardsList
              data={transactions}
              keyExtractor={(item, index) => "key" + index}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }: any) => (
                <TransactionCard key={item.title} data={item} />
              )}
            />
          </TransactionsCardsContainer>
        </>
      )}
    </Container>
  );
}
