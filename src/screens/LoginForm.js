import { View,  StyleSheet, TextInput, Alert } from 'react-native'
import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { useDispatch } from "react-redux";
import userActions from '../redux/actions/userAction';


export default function LoginForm() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  let { signIn } = userActions

  let dataSignIn = {
    name: '',
    password: ''
  }

    let handlerSignIn = (e) => {
      e.preventDefault()
      dataSignIn = {
        email: mail,
        password: password
      }

      dispatch(signIn(dataSignIn))
      Alert.alert('ingresando')
    }


  return (
    <View style={styles.container}>
      <View style={styles.input}>
      <TextInput style={{color:'black'}}  placeholder='Email'
      onChangeText={(e) => setMail(e)}
      value={mail}
       />
      </View>
      <View style={styles.input}>
      <TextInput secureTextEntry={true} style={{color:'black'}}  placeholder='Password'
      onChangeText={(e) => setPassword(e)}
      value={password} />
      </View>

      <View style={styles.viewText}>

      <Button onPress={handlerSignIn} mode="contained">Signin</Button>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(19, 64, 122)',
    colorText:'white'
  },
  viewText: {
    display: 'flex',
    marginTop:15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor:'white',
    width:'80%' ,
   display: 'flex',
    marginTop:15,
    alignItems: 'center',
    justifyContent: 'center',
   borderRadius:10,
   height:50,
  },

})