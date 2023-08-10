import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Botao } from './components/Botao';

export default function App() {

  const [input, setInput] = useState("Digite algo")
  const handleInput = (newInput) => {
    if (newInput == "") {
      setInput("Digite algo")
    } else {
      setInput(newInput)
    }
  }
  return (
    <View style={styles.container}>
      <Text>Digite alguma coisa ai em baixo:</Text>
      <TextInput placeholder='Digite algo' onChangeText={(newInput) => handleInput(newInput)} style={styles.input}></TextInput>
      <Botao>{input}</Botao>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, input: {
    borderWidth: 1,
    width: 150,
    height: 50,
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center"
  }
});
