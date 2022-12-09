import { View, StyleSheet, TextInput, Alert } from "react-native";

import React, { useState } from 'react';
import {  Button } from 'react-native-paper';
import axios from "axios";
import { URL_API } from '../api/url';


export default function SignUp() {
  

 
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [photo, setPhoto] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let dataSignUp = {
    name: "",
    lastName: "",
    role: "",
    photo: "",
    age: "",
    email: "",
    password: "",
  };

  let handlerCatchValue = (e) => {
    e.preventDefault();

    dataSignUp = {
      name: name,
      lastName: lastName,
      role: role,
      photo: photo,
      age: age,
      email: email,
      password: password,
    };

    
        axios({
          method: "post",
          url: `${URL_API}/auth/sign-up`,
          data: dataSignUp,
        })
        .then((res) => {
          setName("");
          if (res.data.success) {
            console.log(res);
            return Alert.alert('Usuario creado');
          } else {
            Alert.alert(res.data.message.join("  -    -   -    -   -"));
          }
        })
        .catch((err) => console.log(err));
    };


  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput style={{ color: "black" }}
         placeholder="Name"
         value={name}
         onChangeText={(e) => setName(e)}

          />
      </View>
      <View style={styles.input}>
        <TextInput style={{ color: "black" }} 
        placeholder="Last Name"
        value={lastName}
        onChangeText={(e) => setLastName(e)}
        />
      </View>
      <View style={styles.input}>
        <TextInput style={{ color: "black" }} 
        placeholder="Role admin o user"
        value={role}
        onChangeText={(e) => setRole(e)}
        />
      </View>
      <View style={styles.input}>
        <TextInput style={{ color: "black" }} 
        placeholder="Photo"
        value={photo}
        onChangeText={(e) => setPhoto(e)}
        />
      </View>
      <View style={styles.input}>
        <TextInput style={{ color: "black" }} 
        placeholder="Age" 
        value={age}
        onChangeText={(e) => setAge(e)}
        />
      </View>
      <View style={styles.input}>
        <TextInput style={{ color: "black" }} 
        placeholder="Email"
        value={email}
        onChangeText={(e) => setEmail(e)}
        />
      </View>
      <View style={styles.input}>
        <TextInput style={{ color: "black" }} 
        placeholder="password"
        value={password}
        onChangeText={(e) => setPassword(e)}
        />
      </View>

      <View style={styles.viewText}>
      
      <Button onPress={handlerCatchValue} mode="contained">SignUp</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(19, 64, 122)",
    colorText: "white",
  },
  viewText: {
    display: "flex",
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    width: "80%",
    display: "flex",
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 50,
    
  },
});



