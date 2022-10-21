import React, {Component} from "react";
import { Text,View,Button } from "react-native";
import db from "../config";
import firebase from "firebase";

export default class TelaExp extends Component{
render(){
    return(
     <View style = {{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
     }}>
      <View style = {{
      flex:0.3
      }}>
      <Text style = {{
      fontSize:20,
      
      }}>
      Bem vindo ao aplicativo, Escolha um de seu interesse 
      </Text>
      <View style = {{
        flex:0.5
      }}>
      <Button title="Manga" onPress={()=> this.props.navigation.navigate("TelaManga")} />
    <Button title="Anime" onPress={()=> this.props.navigation.navigate("TelaAnime")}/>
    </View>

      
      </View>

     </View>
     
     
    )
    
}
}