import React from 'react';
import { Text, StyleSheet, View, ImageBackground, Image,Linking,TouchableOpacity,StatusBar } from 'react-native';
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

export default function About({navigation}) {

    const openMenu = () => {
        navigation.openDrawer()
    }
    return (
        <ImageBackground source={require("../EDFC_Ballast/assets/bg.jpg")} style = {styles.bgconatiner}>
           
           
        {/* <Image source={require("../EDFC_Ballast/assets/dfcc.jpg")} style = {styles.logo} /> */}
        <MaterialIcons name="menu" size={40} style={styles.icon} onPress={openMenu} />
        <Text style = {styles.logotext}>This app is for departmental use only. To keep the privacy of the data, request you to please don't share it.</Text>
        <TouchableOpacity onPress={() => Linking.openURL("https://github.com/love231992/ash_sales_NPL")}>
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
        justifyContent:"space-between",
        alignItems:"center",

    },
    
    logo:{
        width:360,
        height:120,
        // opacity:0.8,
        // marginTop:40
    },
    logoconatiner:{
        alignItems:"center"
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
          justifyContent:"flex-end",
          marginBottom:10,
          fontSize:15,
          fontWeight:"bold",
          color:"crimson",
          opacity:0.8,
          letterSpacing:2.5,
          backgroundColor:"#DAB785"
      },
      link:{
          flexDirection:"row",
          justifyContent:"center",
          backgroundColor:"black",
          borderRadius:5,
          marginTop:180,
          opacity:0.9
      },
      linkText:{
          color:"white",padding:10,

      },giticon:{
          marginTop:7,
          marginLeft:4
      }
      
      
})