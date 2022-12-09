import { View, StyleSheet, ScrollView } from "react-native";
import React,{  useEffect, useState } from "react";
import { Avatar, Button, Card, Title, Searchbar } from "react-native-paper";
import { URL_API } from "../api/url";
import { useDispatch, useSelector } from "react-redux";
import { startSaveCitiesWithFilter } from "../redux/actions/cityAction";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

export default function Cities(props) {
  
  const citiesState = useSelector((state) => state.cities.cities);
    const dispatch = useDispatch();
    const [valueSearch, setValueSearch] = useState("");


    useEffect(() => {
      let rutaBase = `${URL_API}/api/cities?`;

      if (valueSearch) {
        rutaBase = rutaBase.concat("name=" + valueSearch)
      }
   console.log(valueSearch);
      console.log(rutaBase);

      dispatch(startSaveCitiesWithFilter(rutaBase));
    }, [ valueSearch,dispatch]);

  let handleChangeSearch = (e) => {
    setValueSearch(e);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.search}>
        <Searchbar onChangeText={handleChangeSearch}></Searchbar>
        <View>
       {citiesState.map((city) => {
          return (
          <Card style={styles.card}>
            <Card.Content>
              <Card.Cover source={{ uri: city.photo[0] }}></Card.Cover>
              <Title>{city.name}</Title>
            </Card.Content>
            <Card.Actions>

              <Button onPress={() => { props.navigation.navigate("City", { idCity: city._id }) }} mode="contained">
                More Info
              </Button>
            </Card.Actions>
          </Card>
          );
        })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  search: {
    padding: 15,
    backgroundColor: "rgb(19, 64, 122)",
  },

  card: {
    marginTop: 10,
  },
  container: {
    backgroundColor: "rgb(19, 64, 122)",
  },
});
