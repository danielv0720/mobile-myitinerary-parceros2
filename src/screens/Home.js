import {
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  SafeAreaView,
  Animated,
  View,
  Text,
} from "react-native";
import React from "react";

const images = [
  "https://images.pexels.com/photos/13664798/pexels-photo-13664798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/14494411/pexels-photo-14494411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1534411/pexels-photo-1534411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/236294/pexels-photo-236294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];



const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const container_space = width * 0.7;
const space = 10;

export default function Home() {
  

  
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.img}
        source={require("../images/headerimg.png")}
      ></Image>
      <SafeAreaView style={styles.carousel}>
        <Animated.FlatList
     
          data={images}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingTop:30}}
          snapToInterval={container_space}
          scrollEventThrottle={16}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => {


            return (
              <View style={{ width: container_space }}>
                <Animated.View
                  style={{
                    marginHorizontal: space,
                    padding: space,
                    borderRadius: 34,
                    backgroundColor: "white",
                    alignItems: "center",
                   
                  }}
                >
                  <Image source={{ uri: item }} style={styles.porterimage} />
                </Animated.View>
              </View>
              
            );
          }}
        />
        <View style={styles.nav} >
        <Text style={{color:'black', fontSize:11}}>My Itinerary everything you need for your trip</Text>
        <Image
        style={styles.social}
        source={require("../images/iconofb.png")}
      > 
      
      </Image>

        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: "rgb(19, 64, 122)",
    colorText: "white",
  },
  img: {
    width: "100%",
    height: 250,
    backgroundColor: "white",
  },
  porterimage: {
    width: "100%",
    height: container_space,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
  marginBottom:10,
  },
  carousel: {
marginTop:10,

  },
  nav:{
    marginTop:30,
    height:100,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
       
      },
      social: {
        width: 50,
        height: 50,
        backgroundColor: "white",
        marginTop:5,
        
      },

});
