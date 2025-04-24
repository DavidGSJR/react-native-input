import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

function App() {
  const [name, setName] = useState('');
  const[input, setInput] = useState('');

  function saveInfo(){
    if(input == ''){
      alert('Preencha o campo nome!')
      return
    }

    setName(input)
  }
  return (
    <View>
      <View>
        <Image source={require('./assets/favicon.png')}/>
        <TextInput style={styles.input}
        placeholder = 'Digite seu nome'
        onChangeText={(text) => setInput(text)}/>

        <TouchableOpacity onPress={saveInfo} style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>

        <Text style={{fontSize: 40}}>{name}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

let styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    margin: 12,
    padding: 10,
    borderRadius: 100,
    borderColor: '#ccc',
    fontSize: 24,
  },
  button:{
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 100,
    margin: 12,
    alignItems: 'center',
  },
  buttonText:{
    color: '#fff',
    fontSize: 24,
  }  
});
export default App;