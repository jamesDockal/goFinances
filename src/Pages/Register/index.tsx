import React, { useState } from "react";
import { Modal, View, Text, Pressable } from "react-native";
import Button from "../../components/Form/Button";
import Input from "../../components/Form/Input";
import TransactionButton from "../../components/Form/TransactionButton";
import CategorySelect from "../../components/Form/CategorySelect";

import {
  Container,
  Form,
  Header,
  Title,
  TransactionButtonContainer,
} from "./styles";
import Category from "../../components/Modal/Category";

function Register() {
  const [selectedTransaction, setSelectedTransaction] = useState("");
  const [isModalOPen, setIsModalOPen] = useState(false);
  const [selectedItem, setselectedItem] = useState("");

  function handleSelection(name: string) {
    setSelectedTransaction(name);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastrar</Title>
        <Title>{selectedItem}</Title>
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
          <CategorySelect
            title="Categoria"
            onPress={() => setIsModalOPen(true)}
          />
        </View>
        <Button title="Salvar" />
      </Form>
      <Modal visible={isModalOPen}>
        <Category
          closeModal={() => setIsModalOPen(false)}
          getSelected={(name: string) => setselectedItem(name)}
        />
      </Modal>
    </Container>
  );
}

export default Register;
