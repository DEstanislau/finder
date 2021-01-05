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

  async function loadRepositories() {
    setLoading(true);

    const response = await api.get(
      `repositories?q=${nameRepo}in:name&per_page=10&page=${page}`,
    );

    setRepositories(response.data.items);
    setLoading(false);
  }

  function reloadRepositories() {
    setPage(page + 1);
    loadRepositories();
    setRepositories([...repositories, ...response.data.items]);
    setLoading(false);
  }

  async function handleSubmit() {
    loadRepositories();
    setPage(1);
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
          onSubmitEditing={handleSubmit}
        />
        <Button onPress={handleSubmit}>
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
        {loading && <ActivityIndicator size={'large'} color={'#0000ff'} />}
      </ListContainer>
    </Container>
  );
};

export default Home;
