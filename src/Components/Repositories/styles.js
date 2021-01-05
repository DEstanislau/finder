import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

export const Rect = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 15px;
  border-radius: 4px;
  background: #eee;
`;

export const Right = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #eee;
`;

export const NameRepo = styled.Text`
  font-size: 15px;
  color: #333;
  font-weight: bold;
`;

export const NameOwner = styled.Text`
  min-width: 183px;
  max-width: 183px;
  margin-top: 2px;
  font-size: 13px;
  color: #666666;
`;
