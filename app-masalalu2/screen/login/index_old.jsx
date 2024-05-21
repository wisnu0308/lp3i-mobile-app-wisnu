import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState('')
  const [password, onChangePass] = React.useState('')

  const onSubmitLogin = () =>{
    if(email == 'aku' && password == '321') {
      alert('tidak pernah salah')
    }
  }

  return (
    <View style={style.container}>
      <TextInput style={style.textInputStyle} onChangeText={onChangeEmail} placeholder='Email...' placeholderTextColor='green' value={email}/>
      <TextInput style={style.textInputStyle} onChangeText={onChangePass} placeholder='Password...' placeholderTextColor='blue' value={password}/>
 <Button
  title='Welcome To Home'
  onPress={() => onSubmitLogin() }
  />
  </View>
  );
}

const style = StyleSheet.create({
  textInputStyle: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1

  },
  container: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center"
   }
})
     
   