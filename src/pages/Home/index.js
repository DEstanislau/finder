import React, { useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';

import api from '../../services/api';
import Repositories from '../../Components/Repositories';
import { Container, Form, Input, Button, ListContainer, List } from './styles';

const Home = () => {
  const [repositories, setRepositories] = useState([]);
  const [nameRepo, setNameRepo] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function reloadRepositories() {
    if (repositories.length >= 10) {
      setLoading(true);

      const response = await api.get(
        `repositories?q=${nameRepo}in:name&per_page=10&page=${page + 1}`,
      );

      setRepositories([...repositories, ...response.data.items]);
      setPage(page + 1);
      setLoading(false);
    }
  }

  async function loadRepositories() {
    setPage(1);
    setLoading(true);

    const response = await api.get(
      `repositories?q=${nameRepo}in:name&per_page=10&page=1`,
    );

    setRepositories(response.data.items);
    setLoading(false);
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
      <ListContainer>
        {repositories && (
          <List
            data={repositories}
            keyExtractor={item => String(item.id)}
            onEndReached={reloadRepositories}
            onEndReachedThreshold={0.2}
            renderItem={({ item }) => <Repositories data={item} />}
          />
        )}
        {loading && <ActivityIndicator size={'small'} color={'#0000ff'} />}
      </ListContainer>
    </Container>
  );
};

export default Home;
