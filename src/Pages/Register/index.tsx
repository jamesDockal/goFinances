import React, { useState } from "react";
import { View } from "react-native";
import Button from "../../components/Form/Button";
import Input from "../../components/Form/Input";
import TransactionButton from "../../components/Form/TransactionButton";
import {
  Container,
  Form,
  Header,
  Title,
  TransactionButtonContainer,
} from "./styles";

function Register() {
  const [selectedTransaction, setSelectedTransaction] = useState("");

  function handleSelection(name: string) {
    setSelectedTransaction(name);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastrar</Title>
      </Header>
      <Form>
        <View>
          <Input placeholder="Nome" />
          <Input placeholder="Descrição" />
          <TransactionButtonContainer>
            <TransactionButton
              title="Deposito"
              type="up"
              isSelected={selectedTransaction === "up"}
              onPress={() => handleSelection("up")}
            />
            <TransactionButton
              onPress={() => handleSelection("down")}
              title="Saque"
              type="down"
              isSelected={selectedTransaction === "down"}
            />
          </TransactionButtonContainer>
        </View>
        <Button title="Salvar" />
      </Form>
    </Container>
  );
}

export default Register;
