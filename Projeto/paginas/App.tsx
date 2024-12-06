import {View, Text, StyleSheet, TextInput, Image, Button, StatusBar} from 'react-native'

// export default function App(){ 
//   return(
//     <View>

//     <View style = {{backgroundColor: 'red', height:20}}></View>
//     <Text style = {{fontSize: 25, fontWeight:800, color: 'green'}}>
//       App Teste
//     </Text>
    
//     </View>
//   )
// }

// para editar o place holder usamos a propriedade placeholderTextColor
// para nao editar inline usamos uma variavel que ira receber o estilo

const img = require("../assets/favicon.png")

export default function App(){
  return(
    <View style={styles.main}>

      <StatusBar backgroundColor='red' barStyle='light-content'/>
      <Text 
        style={styles.Text}>Form React Native
      </Text>
      <Image 
        style = {styles.Image} source={img}
      />
      <TextInput 
        style = {styles.Input} placeholder='nome' 
        placeholderTextColor= 'gray'
        
      />
      <TextInput 
        style = {styles.Input} placeholder='email' 
        placeholderTextColor= 'gray'
        autoCapitalize='none'
        keyboardType='email-address'
      />
      <TextInput 
        style = {styles.Input} placeholder='senha' 
        placeholderTextColor= 'gray'
        secureTextEntry={true}
        autoCapitalize='none'
      />
      <Button title='Cadastrar' onPress={()=>{
        alert('Cadastrado com sucesso')
        
      }}></Button>
      </View>
      


  )
}




//O StyleSheet, é utilizado para fazer uma estilizacao local 

const styles = StyleSheet.create({
  main:{
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
    
  },
  main2:{
      height: 15,
      width:100,
      backgroundColor: 'red'

  },
  Text:{
    fontSize:25,
    fontWeight: 'normal',
    color: 'black', 

  },

  Image: {
    width: 50, // Ajuste conforme necessário
    height: 50, // Ajuste conforme necessário
    marginVertical: 10,
  },
  

  Input:{
    width: 300,
    backgroundColor: '#E2E8F0',
    borderRadius: 10,
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'normal',
    color: "gray",
  },

  
})