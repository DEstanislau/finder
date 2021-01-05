import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #ffffff;
`;

export const Form = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 6px;
  background: #eee;
  border-radius: 50px;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'black',
})`
  flex: 1;
  height: 40px;
  width: 85%;
  background: #eee;
  padding: 0 15px;
  border: 1px solid #eee;
  border-radius: 50px;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background: black;
`;

export const ListContainer = styled.View`
  flex: 1;
  border-top-width: 1px;
  border-color: #eee;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
