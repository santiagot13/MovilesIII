import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, Alert} from 'react-native';


export default function App() {
  const saludo=() => {Alert.alert("Hola CESDE")};
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Image style={styles.logo} source={require('./assets/user.png')}/>
      <TextInput maxLength={10}  style={styles.textInput} placeholder="Usuario" onChangeText={(text) => setName(text)} />
      <Button style={styles.button} tittle="Start" onPress={saludo}></Button> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6CD16C',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height:100
  },
  textInput:{
    borderColor:'#000000',
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
    width: 220,
    textAlign: 'center'
  }
});


//Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>