import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import {
  Container,
  ImageContainer,
  ButtonContainer,
  TitleContainer,
  Title,
  Button,
  ButtonText,
} from './styles';

import StartedImage from '../../assets/home_image.svg';

const Started = ({ navigation }) => {
  return (
    <Container>
      <StatusBar style="auto" />
      <ImageContainer>
        <StartedImage width={250} height={250} />
      </ImageContainer>

      <TitleContainer>
        <Title>O lugar perfeito para encontrar repositórios do Github!</Title>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
      </TitleContainer>

      <ButtonContainer>
        <Button onPress={() => navigation.navigate('Home')}>
          <ButtonText> Comece Agora! </ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Started;
