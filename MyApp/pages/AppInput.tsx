import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";

interface AppState {
  nome: string;
  input: string;
}

class App extends Component<{}, AppState> {
  constructor() {
    super({});
    this.state = {
      nome: "",
      input: "",
    };
  }

  entrar = () => {
    if (this.state.input.trim() === "") {
      Alert.alert("Erro", "Digite seu nome");
      // A primeira aspas serve como um titulo para o Alert
      return;
    }
    this.setState({ nome: "Bem vindo " + this.state.input });
  };

  render() {
    return (
      <View style={estilo.container}>
        <TextInput
          style={estilo.input}
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
          onChangeText={(texto) => this.setState({ input: texto })}
        />
        <Text style={estilo.texto}>{this.state.nome}</Text>
        <Button title="Entrar" onPress={this.entrar} />

        
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#222",
    margin: 10,
    fontSize: 18,
    padding: 10,
    width: "80%",
  },
  texto: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10
  },
});

export default App;
