import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [salary, setSalary] = useState('');
  const[input, setInput] = useState('');

  function saveInfo(){
    if(input == ''){
      alert('Preencha o campo nome!')
      return
    }

    if(age == ''){
      alert('Preencha o campo idade!')
      return
    }

    if(salary == ''){
      alert('Preencha o campo salario!')
      return
    }

    setName(input)
    setName(age)
    setName(salary)
  }
  return (
    <View>
      <View>
        <TextInput style={styles.input}
        placeholder = 'Digite seu nome'
        onChangeText={(text) => setInput(text)}/>

        <TextInput style={styles.input}
        placeholder = 'Digite sua idade'
        onChangeText={(text) => setAge(text)}/>

        <TextInput style={styles.input}
        placeholder = 'Digite seu salario'
        onChangeText={(text) => setSalary(text)}/>

        <TouchableOpacity onPress={saveInfo} style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>

        {name && age && salary && (
          <>
            <Text style={{fontSize: 40}}>{name}</Text>
            <Text style={{fontSize: 40}}>{age}</Text>
            <Text style={{fontSize: 40}}>{salary}</Text>
          </>
          
        )}
        
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