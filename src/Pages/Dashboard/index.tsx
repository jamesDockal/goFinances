import React from "react";
import { Container, Header,
  UserWrapper,
  UserInfo,
  UserImage,
  User,
  Greeting,
  UserName,
  Power
} from "./styles";

import Image from '../../../assets/teste.jpg'

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

        <Power 
        name="power" />
    

      </UserWrapper>
      </Header>
    </Container>
  );
}
