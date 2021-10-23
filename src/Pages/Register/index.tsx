import React, { useState } from "react";
import {
  Modal,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Button from "../../components/Form/Button";
import InputForm from "../../components/InputForm";
import TransactionButton from "../../components/Form/TransactionButton";
import CategorySelect from "../../components/Form/CategorySelect";
import Category from "../../components/Modal/Category";

import {
  Container,
  Form,
  Header,
  Title,
  TransactionButtonContainer,
} from "./styles";
import { useNavigation } from "@react-navigation/core";

function Register() {
  const [selectedTransaction, setSelectedTransaction] = useState("");
  const [isModalOPen, setIsModalOPen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const navigation = useNavigation();

  function handleSelection(name: string) {
    setSelectedTransaction(name);
  }

  const schema = Yup.object().shape({
    name: Yup.string().required("Você precisa informar um nome!"),
    price: Yup.number()
      .typeError("Voce precisar informar em valor numérico!")
      .positive("O valor não poder ser negativo!")
      .required("O preço é obrigatorio!"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function hadleFormSubmit(form: any) {
    if (!selectedItem) {
      return Alert.alert("Você Precisar Selecionar uma Categoria");
    }
    if (!selectedTransaction) {
      return Alert.alert("Você Precisar Selecionar o Tipo");
    }

    const data = {
      name: form.name,
      price: form.price,
      category: selectedItem,
      type: selectedTransaction,
      date: new Date(),
    };

    try {
      await AsyncStorage.setItem(
        "@gofinances:transactions",
        JSON.stringify(data)
      );

      reset();
      setSelectedTransaction("");
      setSelectedItem("");
      navigation.navigate("Listagem");
    } catch (error) {
      console.log("error", error);
      Alert.alert("Um erro occreu");
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastrar</Title>
          <Title>{selectedItem}</Title>
        </Header>
        <Form>
          <View>
            <InputForm
              controller={control}
              name="name"
              placeholder="Nome"
              error={errors.name && errors.name.message}
            />
            <InputForm
              controller={control}
              name="price"
              placeholder="Preço"
              keyboardType="numeric"
              error={errors.price && errors.price.message}
            />
            <TransactionButtonContainer>
              <TransactionButton
                title="Deposito"
                type="up"
                isSelected={selectedTransaction === "up"}
                onPress={() => handleSelection("up")}
              />
              <TransactionButton
                title="Saque"
                type="down"
                isSelected={selectedTransaction === "down"}
                onPress={() => handleSelection("down")}
              />
            </TransactionButtonContainer>
            <CategorySelect
              title={selectedItem || "Categoria"}
              onPress={() => setIsModalOPen(true)}
            />
          </View>
          <Button title="ok" onPress={handleSubmit(hadleFormSubmit)} />
        </Form>
        <Modal visible={isModalOPen}>
          <Category
            closeModal={() => setIsModalOPen(false)}
            getSelected={(name: string) => setSelectedItem(name)}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default Register;
