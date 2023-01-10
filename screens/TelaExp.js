import React, {Component} from "react";
import { Text,View,Button, TouchableOpacity, Image, StyleSheet } from "react-native";
import db from "../config";
import firebase from "firebase";
var ImgManga = require("../assets/manga.jpg");
var ImgAnime = require ("../assets/anime.jpg");

export default class TelaExp extends Component{
render(){
    return(
     <View style = {{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
     }}>
      <Text style = {{
      fontSize:20,
      
      }}>
      Bem vindo ao aplicativo, Escolha um de seu interesse 
      </Text>
     
      <TouchableOpacity onPress={()=> this.props.navigation.navigate("TelaManga")} >
      <Image source = {ImgManga}  style = {styles.ImgManga}/>
      <Text>Manga</Text>
      </TouchableOpacity>
    <TouchableOpacity  onPress={()=> this.props.navigation.navigate("TelaAnime")}>
    <Image source = {ImgAnime}  style = {styles.ImgAnime}/>
    <Text>Anime</Text>
    </TouchableOpacity>
    </View>

      
      

   
     
    )
    
}
}
const styles = StyleSheet.create({
  ImgAnime:{
    width:200,
    height:200,
    resizeMode:"contain"
  },
  ImgManga:{
    width:200,
    height:200,
    resizeMode:"contain"
  }
})