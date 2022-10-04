import React from 'react';
import {Text} from 'react-native';

import Header from '../../components/Header';
import Input from '../../components/Input';

import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.Container>
        <Header />
        <S.Content>
        <Input 
            type='secondary'
            autoCorrect={false}
            autoCapitalize="none"
            placeholder='Adicione uma nova tarefa'
          />
          <S.Button onPress={() => {}}  style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? '#4ea8de'
              : '#1e6f9f'
          }
        ]}>
            <Text style={{color: '#fff'}}>+</Text>
          </S.Button>
        </S.Content>
    </S.Container>
  );
}

export default Home;