import React, { useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { VictoryPie } from "victory-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { addMonths, format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { categories } from "../../categories";
import HisotryCard from "../../components/HistoryCard";

import {
  Container,
  Header,
  Title,
  MonthContainer,
  MonthButton,
  MonthIcon,
  Month,
  HistoryContainer,
} from "./styles";
import { useFocusEffect } from "@react-navigation/core";
import { useAuth } from "../../hooks/Auth";

type Transaction = {
  price: number;
  name: string;
  date: string;
  category: string;
  type: "up" | "down";
};

type ExpenseTransaction = {
  name: string;
  price: string;
  color: string;
  porcentage: string;
};

function Resume() {
  const [expensiestransactions, setExpensiesTransactions] = useState<
    ExpenseTransaction[]
  >([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { user } = useAuth();
  async function loadData() {
    const storageKey = `@gofinances:transactions_user:${user.id}`;
    const savedData = await AsyncStorage.getItem(storageKey);
    const data: Transaction[] = JSON.parse(savedData!);

    const totalByCategory: ExpenseTransaction[] = [];

    const totalExpense = data.reduce(
      (accumulator: number, expensive: Transaction) => {
        if (expensive.type === "down") {
          return accumulator + Number(expensive.price);
        } else {
          return accumulator;
        }
      },
      0
    );

    const expensivines = data.filter(
      (expensive: Transaction) =>
        expensive.type === "down" &&
        new Date(expensive.date).getMonth() === selectedDate.getMonth() &&
        new Date(expensive.date).getFullYear() === selectedDate.getFullYear()
    );

    categories.forEach((category) => {
      let totalSum = 0;

      expensivines.forEach((transaction) => {
        if (
          transaction.type === "down" &&
          transaction.category === category.name
        ) {
          totalSum += transaction.price;
        }
      });

      if (totalSum) {
        const porcentage = (totalSum / totalExpense) * 100;
        const formmatedPorcentage = `${porcentage}%`;

        const formattedPrice = totalSum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        totalByCategory.push({
          name: category.name,
          price: formattedPrice,
          color: category.color,
          porcentage: formmatedPorcentage,
        });
      }
    });

    setExpensiesTransactions(totalByCategory);
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [selectedDate])
  );

  return (
    <Container>
      <Header>
        <Title>Histórico Das Transações</Title>
      </Header>

      <HistoryContainer
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          padding: 24,
          paddingBottom: useBottomTabBarHeight(),
          alignItems: "center",
        }}
      >
        <MonthContainer>
          <MonthButton
            onPress={() => {
              const date = addMonths(selectedDate, -1);
              setSelectedDate(date);
            }}
          >
            <MonthIcon name="chevron-left" />
          </MonthButton>
          <Month>{format(selectedDate, "MMMM, yyyy", { locale: ptBR })}</Month>
          <MonthButton
            onPress={() => {
              const date = addMonths(selectedDate, 1);
              setSelectedDate(date);
            }}
          >
            <MonthIcon name="chevron-right" />
          </MonthButton>
        </MonthContainer>

        <VictoryPie
          data={expensiestransactions}
          x="porcentage"
          y="price"
          labelRadius={50}
          style={{
            labels: {
              fill: "white",
              fontWeight: 500,
            },
          }}
          colorScale={expensiestransactions.map(
            (transaction) => transaction.color
          )}
          height={350}
        />

        {expensiestransactions.map((transaction) => (
          <HisotryCard
            key={transaction.name}
            amount={transaction.price}
            color={transaction.color}
            text={transaction.name}
          />
        ))}
      </HistoryContainer>
    </Container>
  );
}

export default Resume;
