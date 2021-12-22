import React from "react";
import { Button, TextInput, View } from "react-native";

export const Profile: React.FC = ({}) => {
  return (
    <View>
      <TextInput placeholder="Nome" autoCorrect={false} />
      <TextInput placeholder="Sobrenome" autoCorrect={false} />
      <Button title="salvar" onPress={() => {}} />
    </View>
  );
};
