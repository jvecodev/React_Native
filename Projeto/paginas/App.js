import {View, Text, StyleSheet, Image} from 'react-native'

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
const img = require("../assets/favicon.png")

export default function App(){
  return(
    <View style={styles.main}>
      <View style={styles.main2}></View>
      <Text style={styles.Text}>Primeiro teste com estilos</Text>
      <Image style = {styles.Image} source={img}/>
    </View>
  )
}




//O StyleSheet, é utilizado para fazer uma estilizacao local 

const styles = StyleSheet.create({
  main:{
    backgroundColor: 'gray',
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
    fontWeight: 'bold'

  }

})