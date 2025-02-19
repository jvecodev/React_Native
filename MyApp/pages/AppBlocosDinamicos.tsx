import React, { Component } from "react";
import { View, Text, Button } from "react-native";


interface AppState {
  nome: string;
}

export default class App extends Component<{}, AppState> {
  constructor() {
    super({});
    this.state = {
      nome: "",
    };
  }

  entrar = (novoNome: string) => {
    
    this.setState({ nome: novoNome });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Olá mundo </Text>
        <Text>Seja Bem-vindo</Text>
        <Text>{this.state.nome}</Text>
        <Button title="Entrar" onPress={() => this.entrar("Matheus")} />
      </View>
    );
  }
}
