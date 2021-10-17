import React, { useEffect, useState } from "react";

import {
  Container,
  List,
  Row,
  Icon,
  Name,
  Pressable,
  Title,
  Separator,
} from "./styles";

import { categories } from "../../../categories";

type Props = {
  closeModal: () => void;
  getSelected: (name: string) => void;
};

const Category: React.FC<Props> = ({ closeModal, getSelected }) => {
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {}, [selectedItem]);

  return (
    <Container>
      <List
        data={categories}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }: any) => (
          <Row
            onPress={() => setSelectedItem(item.name)}
            isSelected={item.name === selectedItem}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Row>
        )}
      ></List>

      <Pressable
        onPress={() => {
          getSelected(selectedItem);
          closeModal();
        }}
      >
        <Title>Salvar</Title>
      </Pressable>
    </Container>
  );
};

export default Category;
