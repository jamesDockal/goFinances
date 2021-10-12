import styled from "styled-components/native";
import { RFPercentage,RFValue} from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons'; 

export const Container = styled.View`
  flex: 1;
  backgroundColor: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  backgroundColor: ${({ theme }) => theme.colors.primary};

  justifyContent: center;
  alignItems: center;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;  
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
`

export const UserInfo = styled.View`
  flexDirection: row;
` 

export const UserImage = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  borderRadius: 10px
` 

export const User = styled.View`
  marginLeft: 8px;
` 

export const Greeting = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  fontSize: ${RFValue(17)}px;
  fontFamily: ${({theme}) => theme.fonts.regular}
`

export const UserName = styled.Text`

color: ${({theme}) => theme.colors.shape};
fontSize: ${RFValue(17)}px;
fontFamily: ${({theme}) => theme.fonts.bold}
` 

export const Power = styled(Feather)`
  color: ${({theme}) => theme.colors.attention};
  fontSize: ${RFValue(24)}px;

`