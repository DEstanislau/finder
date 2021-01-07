import React, { useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';

import api from '../../services/api';
import EmptyImage from '../../assets/empty_product.svg';
import Repositories from '../../Components/Repositories';
import {
  Container,
  Form,
  Input,
  Button,
  ListContainer,
  List,
  Alert,
} from './styles';

const AnimatedList = Animatable.createAnimatableComponent(List);

const Home = () => {
  const [repositories, setRepositories] = useState([]);
  const [nameRepo, setNameRepo] = useState('');
  const [page, setPage] = useState(1);
  const [loadingDown, setLoadingDown] = useState(false);
  const [loadingTop, setLoadingTop] = useState(false);
  const [alert, setAlert] = useState(false);

  async function reloadRepositories() {
    if (nameRepo === '' || nameRepo === undefined) {
      setAlert(true);
      return;
    } else {
      setAlert(false);
    }

    if (repositories.length >= 10) {
      setLoadingDown(true);

      const response = await api.get(
        `repositories?q=${nameRepo}in:name&per_page=10&page=${page + 1}`,
      );

      setRepositories([...repositories, ...response.data.items]);
      setPage(page + 1);
      setLoadingDown(false);
    }
  }

  async function loadRepositories() {
    if (nameRepo === '' || nameRepo === undefined) {
      setAlert(true);
      return;
    } else {
      setAlert(false);
    }
    setLoadingTop(true);
    setPage(1);

    const response = await api.get(
      `repositories?q=${nameRepo}in:name&per_page=10&page=1`,
    );

    setRepositories(response.data.items);
    setLoadingTop(false);
  }

  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Pesquise aqui"
          value={nameRepo}
          onChangeText={setNameRepo}
          returnKeyType="send"
          onSubmitEditing={loadRepositories}
        />
        <Button onPress={loadRepositories}>
          <AntDesign name="search1" size={20} color="#fff" />
        </Button>
      </Form>
      {alert && <Alert> Campo Obrigatório</Alert>}
      <ListContainer>
        {loadingTop && <ActivityIndicator size={'small'} color={'red'} />}
        {repositories.length > 0 ? (
          <AnimatedList
            useNativeDriver
            animation="zoomIn"
            data={repositories}
            keyExtractor={item => String(item.id)}
            onEndReached={reloadRepositories}
            onEndReachedThreshold={0.2}
            renderItem={({ item }) => <Repositories data={item} />}
          />
        ) : (
          <EmptyImage
            style={{ alignSelf: 'center' }}
            width={350}
            height={350}
          />
        )}
        {loadingDown && <ActivityIndicator size={'small'} color={'#0000ff'} />}
      </ListContainer>
    </Container>
  );
};

export default Home;
