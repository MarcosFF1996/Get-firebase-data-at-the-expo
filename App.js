import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import firebase from './src/firebase';

export default function App() {
  const [nome, setNome] = useState();

  useEffect(() => {
    firebase.database().ref('usuarios/usuario1/nome').on('value', (snapshot) => {
      const nome = snapshot.val();
      setNome("Nome: " + nome);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
