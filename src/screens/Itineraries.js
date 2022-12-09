import { StyleSheet,ScrollView } from 'react-native'
import React, { useState,useEffect } from 'react'
import {  Button, Card, Title,Paragraph } from 'react-native-paper';
import axios from "axios";
import { URL_API } from '../api/url';

export default function Itineraries(props) {

  const idCity = props.route.params.idCity;
  const [itineraries, setItineraries] = useState(null);
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
    {itineraries &&
          itineraries.map((item) => {
            return (
          
     <Card style={styles.card}>
    <Card.Content>
    <Card.Cover source={{ uri: item.photo[0] }} />
      <Title>{item.name}</Title>
    </Card.Content>
    <Card.Actions>
      <Button style={styles.reaction}>like</Button>
      <Button style={styles.reaction}>love</Button>
      <Button style={styles.reaction}>suprise</Button>
      <Button style={styles.reaction}>dislike</Button>
  
    </Card.Actions>
  </Card>
          );
        })}
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