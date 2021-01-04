import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
`;

export const TitleContainer = styled.View`
  flex: 1;
  margin: 0 40px;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
  margin: 50px 20px 0 20px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  margin: 20px;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.Text`
  color: black;
  font-size: 18px;
  margin: 0 20px 10px 20px;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50%;
  border-radius: 10px;
  background: orange;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
`;
