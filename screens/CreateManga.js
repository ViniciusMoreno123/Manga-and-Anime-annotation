import React, {Component} from "react";
import { Text,View,Button } from "react-native";


export default class CreateManga extends Component{
render(){
    return(
     <View style = {{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
     }}>
      <Text>
      Criar manga
      </Text>
     </View>   
    )

}
}