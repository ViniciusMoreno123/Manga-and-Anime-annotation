import React, {Component} from "react";
import { Text,View,Button,FlatList } from "react-native";

import db from "../config";

export default class TelaManga extends Component{
  constructor(props){
    super(props);
    this.state={
      mangas:[]
    }
  }
  pegarmangas = ()=>{
    db.collection("Mangas")
    .get()
    .then(snapshot=>{
      snapshot.docs.map(doc=>{
      this.setState({
      mangas: [...this.state.mangas,doc.data()]
      })
      })
    })
  }
  componentDidMount = async ()=>{
    this.pegarmangas()
  }
  renderItem = ({item,index})=>{
    return(
      <View style = {{borderWidth:2}}>
         <Text>Mangá:{item.Manga}</Text>
      <Text> Capitulo do Mangá:{item.Capitulo}</Text>
      <Text>Observações:{item.Observacoes}</Text> 
      </View>
    )
  }
render(){
  const{mangas} = this.state;
    return(
     <View style = {{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
     }}>
      
     
      <Button title="Criar Manga" onPress={()=> this.props.navigation.navigate("CreateManga")}/>
    

    <View style = {{flex:0.7}}>
    <FlatList 
    data={mangas}
    renderItem={this.renderItem}
    keyExtractor={(item,index)=> index.toString()}
    />
    </View>
     </View>   
    )

}
}