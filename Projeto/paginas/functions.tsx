import { Text, View } from "react-native";


// uma meneira de utilizar comandos com funcoes, para nao ficar repetindo o codigo
function Texto(){
  return(
        <Text>Teste</Text>
  )
}

export default function App(){
  return(
    <View>
      <Texto/>
    </View>
  )
}