import React from 'react';
import { Text, StyleSheet, View, ImageBackground, Image,Linking,TouchableOpacity,StatusBar } from 'react-native';
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

export default function About({navigation}) {

    const openMenu = () => {
        navigation.openDrawer()
    }
    return (
        <ImageBackground source={require("../EDFC_Ballast/assets/bg.jpg")} style = {styles.bgconatiner}>
        <TouchableOpacity onPress={() => Linking.openURL("https://github.com/love231992/mobapp-rail")}>
            <View style = {styles.link}>
            <AntDesign name="github" size={20} color="white" style = {styles.giticon}/>
                <Text style={styles.linkText}>Open Sourced on GITHUB</Text>
            </View>
        </TouchableOpacity>
        <Text style = {styles.footer}>Crafted by Jugal Kishore</Text>
        </ImageBackground>
    )
        
}


const styles = StyleSheet.create({
    bgconatiner:{
        flex:1,
        width: null,
        height: null,
        alignItems:"center",

    },
    
    logo:{
        width:360,
        height:120,
    },
    
    logotext:{
        color:"#d108b6",
        fontSize:18,
        fontWeight:"bold",
        marginTop:150,
        marginHorizontal:20,
        textAlign:"justify"
    },
    icon:{
        position:"absolute",
        right:5,
        color:"white",
        marginTop:80   
      },
      footer:{
          marginTop:10,
          fontSize:18,
          fontWeight:"bold",
          color:"crimson",
          opacity:0.8,
          letterSpacing:2.5,
      },
      link:{
          flexDirection:"row",
          justifyContent:"center",
          backgroundColor:"black",
          borderRadius:5,
          marginTop:300,
          opacity:0.9,
      },
      linkText:{
          color:"white",padding:10,

      },giticon:{
          marginTop:7,
          marginLeft:14
      }
      
      
})