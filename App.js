import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';

import Login from './src/screens/Login';

export default function App() {
  return (
    <View style = {style.container}> {//add style = {stule.container} para indicar tamanho da tela
      }
          
      <StatusBar style="auto" />
      <Login />

    </View>
  );
}
// criado style para o container, para centralizar componentes
const style = StyleSheet.create({
  container: {
    flex: 1,
    //outra maneira para centralizar icones dentro da tela 
    //width:'100%',
    //height:'100%',
  }
})

