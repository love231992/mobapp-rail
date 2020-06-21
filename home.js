import React, { useState } from 'react'
import { Text, StyleSheet, View, Alert, FlatList, ImageBackground, TouchableOpacity, StatusBar,} from 'react-native'
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import AnimatedLoader from "react-native-animated-loader";
import * as Animatable from 'react-native-animatable';



export default function App({navigation}) {
  const [doList,setDoList] = useState();
  var [loading,setLoading] = useState(false)
  const [total, setTotal] = useState()
  const [date, setDate] = useState()
  
  connect = () => {
      setLoading(true)
      const URL = "https://ballast-data.herokuapp.com/";
      fetch(URL).then(response => response.json())
      .then(response => {
          setTotal(response[4][4])
          setDate(response[4][0])
          setDoList(response);
      }).catch(error => {
          Alert.alert(error.message);
      }
      ).then( () => {
        setLoading(false)
      })
  }

  const openMenu = () => {
    navigation.openDrawer()
}
  return (
      <View style = {styles.component}>
        <StatusBar hidden={true} />
          <ImageBackground source={require("../EDFC_Ballast/assets/dfcc.jpg")} style = {styles.header}>
            <MaterialIcons name="menu" size={40} style={styles.icon} onPress={openMenu} />
              <View style={styles.headerTitle}>
                <Text style={styles.headerText}>EDFC CP-303</Text>
              </View>
          </ImageBackground>
          <TouchableOpacity onPress={connect}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>PRESS HERE TO UPDATE DATA</Text>
            </View>   
          </TouchableOpacity>
          {loading ?
          (
            <View style={styles.indicator}>
            <AnimatedLoader
              visible={loading}
              overlayColor="rgba(255,255,255,0)"
              source={require("./assets/train-with-light.json")}
              animationStyle={styles.lottie}
              speed={1}
            />
            </View>
          ):

          (
          <FlatList
            data={doList}
            keyExtractor={(item) => item[2] }
            renderItem={({item,index }) => (
            <TouchableOpacity activeOpacity={0.4} >
              <Animatable.View animation="fadeInLeft" iterationDelay={index * 800} easing="linear" style={styles.item}>  
                <Animatable.Text  duration={1000} style={styles.itemText}>{item [1]}</Animatable.Text>
                <Animatable.Text  duration={2000} style={styles.itemText}>{item [2]} MT</Animatable.Text>
                <Animatable.Text  duration={3000} style={styles.itemText}>Trips {item [3]}</Animatable.Text>
              </Animatable.View>
              </TouchableOpacity>
            )}
            />
            
          )}
          <Text style={styles.total}>Total Qty as on {date} is {total} MT</Text>
          <Text style = {styles.footer}>Crafted by Jugal Kishore</Text>
      </View>  
  )
}


const styles = StyleSheet.create({
  component:{
      backgroundColor:"white",
      flex:1,
  },
  header:{
    flexDirection:"row",
    alignItems:"flex-end",
    justifyContent:"center",
    height:120,
    marginBottom:0
  },
  icon:{
    position:"absolute",
    left:15,
    top:1,
    color:"crimson",
  },
  headerTitle:{
    flexDirection:"row",
  },
  headerText:{
    fontWeight:"bold",
    fontSize:30,
    color:"white",
    letterSpacing:5,
    marginTop:15,
    height:"100%",
    alignItems:"center"
  },
  itemText:{
    paddingLeft:20,
      fontSize: 20,
      fontWeight:"bold",
      color:"#D64045",
  },
  item:{
      flex:1,
      flexDirection:"column",
      justifyContent:"space-around",
      backgroundColor: "#FDFCDC",
      margin: 1,
      padding:10,
      fontSize:20,
      borderRadius:2,
      borderColor:"black",
      borderWidth:0.2,
      borderStyle:"solid",
      elevation:5,
      opacity:0.8
  },
  button:{
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:"#D64045"
},
buttonText:{
    color:"white",
    fontWeight:"bold",
    fontSize:16,
    textAlign:"center",
    letterSpacing:2
},
indicator:{
  flex:1,
},
footer:{
  textAlign:"center",
  padding:5,
  fontSize:15,
  fontWeight:"bold",
  color:"crimson",
  opacity:0.8,
  letterSpacing:2.5,
  backgroundColor:"#DAB785"
},
lottie: {
  width: 100,
  height:300
},
total :{
  textAlign:"center",
  // padding:2,
  fontSize:19,
  fontWeight:"bold",
  color:"crimson",
  opacity:0.8,
  // letterSpacing:1.5,
  backgroundColor:"#DAB785"
}

})
