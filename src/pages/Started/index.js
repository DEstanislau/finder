import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable';

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

const AnimatedContainer = Animatable.createAnimatableComponent(Container);

const Started = ({ navigation }) => {
  return (
    <AnimatedContainer useNativeDriver animation="bounceInLeft">
      <StatusBar style="auto" />
      <ImageContainer>
        <StartedImage width={250} height={250} />
      </ImageContainer>

      <TitleContainer>
        <Title>O lugar perfeito para encontrar repositórios do Github!</Title>
        <Ionicons name="md-checkmark-circle" size={32} color="green" />
      </TitleContainer>

      <ButtonContainer>
        <Button
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            })
          }
        >
          <ButtonText> Comece Agora! </ButtonText>
        </Button>
      </ButtonContainer>
    </AnimatedContainer>
  );
};

export default Started;
