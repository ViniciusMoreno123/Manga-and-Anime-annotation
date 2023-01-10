import React, {Component} from "react";
import { Text,View,Button,TextInput, Alert } from "react-native";
import db from"../config"

export default class CreateManga extends Component{
    async addManga(){
    if(this.state.Manga && this.state.Capitulo && this.state.Observacoes){
    db.collection("Mangas").add({
        Manga:this.state.Manga,
        Capitulo:this.state.Capitulo,
        Observacoes:this.state.Observacoes
    })
    this.setState({
        Manga:"",
        Capitulo:"",
        Observacoes:""
    })
    this.props.navigation.navigate("TelaExp")
    } else{
        Alert.alert("Falta Feijão nessa comida aí!")
    }
    }
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
      <TextInput
      style={{borderWidth:2,
               width:"90%"}}
      onChangeText= {Manga=>this.setState({Manga})}
      placeholder={"Insira o nome do mangá"}
      />
      <TextInput
      style={{borderWidth:2,
               width:"90%"}}
      onChangeText= {Capitulo=>this.setState({Capitulo})}
      placeholder={"Insira o número do capítulo"}
      />
      <TextInput
      style={{borderWidth:2,
               width:"90%"}}
      onChangeText= {Observacoes=>this.setState({Observacoes})}
      placeholder={"Insira as observações"}
      />
      <Button title="Enviar" onPress={()=> this.addManga()}/>
     </View>   
    )

}
}