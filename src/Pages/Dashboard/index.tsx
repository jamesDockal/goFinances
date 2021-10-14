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
} from "./styles";

import Image from "../../../assets/teste.jpg";
import Card from "../../components/Card";

export default function Dashboard() {
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
        <Card
          title="Entradas"
          amount="R$ 17.400,00"
          lastEntry="Última entrada dia 13 de outubro"
          type="up"
        />

        <Card
          title="Saidas"
          amount="R$ 12.590,00"
          lastEntry="Última entrada dia 3 de Abril"
          type="down"
        />

        <Card
          title="Total"
          amount="R$ 16.141,00"
          lastEntry="01 a 16 de Abril"
          type="total"
        />
      </CardContainer>
    </Container>
  );
}
