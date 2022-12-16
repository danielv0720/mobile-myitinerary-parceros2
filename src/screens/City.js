import { StyleSheet,ScrollView } from 'react-native'
import React, { useState,useEffect } from 'react'
import {  Button, Card, Title,Paragraph } from 'react-native-paper';
import axios from "axios";
import { URL_API } from '../api/url';

export default function City(props) {
  const idCity = props.route.params.idCity;
  const [city, setCity] = useState(null);
  const [ itineraryId] = useState();


  
  useEffect(() => {
    axios.get(`${URL_API}/api/cities/${idCity}`).then((response) => {
      setCity(response.data);
    });

    axios
      .get(`${URL_API}/api/itineraries?cityId=${idCity}`)
      .then((response) => {
        console.log(response);
        setItineraries(response.data.response);
      });
  }, [idCity, itineraryId]);



  return (
    <ScrollView style={styles.container}>
     <Card style={styles.card}>
    <Card.Content>
    {city && (
   <>
    <Card.Cover source={{ uri: city.photo[0] }}></Card.Cover>
      <Title>{city.name}</Title>
      <Paragraph>Continent: {city.continent}</Paragraph>
      <Paragraph>Population: {city.population}</Paragraph>
   </>
      )}
    </Card.Content>
    <Card.Actions>
      <Button onPress={() => { props.navigation.navigate("Itineraries", { idCity: city._id }) }} mode="contained">Itineraries</Button>
    </Card.Actions>
  </Card>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  search: {
    padding:15,
    backgroundColor: "rgb(19, 64, 122)",
  },

  card: {
    marginTop:10,
  },
  container: {
    backgroundColor: "rgb(19, 64, 122)",
  },
})

