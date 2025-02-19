import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";



export class App extends Component {
  render() {
    return (
      <View style={[styles.area, styles.alinhandoArea]} >
        <Text style={styles.mainText}>João Vitor</Text>
        <Text>João Vitor</Text>
        <Text>João Vitor</Text>
        <Text>João Vitor</Text>
        <Text>João Vitor</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  area: {
    marginTop: 40,
    
  },
  alinhandoArea:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText: {
    fontSize: 25,
    color: "#FF0000",
  },
  
});

export default App;
