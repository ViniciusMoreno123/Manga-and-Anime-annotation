import React, {Component} from "react";
import { Text,View,Button } from "react-native";


export default class TelaManga extends Component{
render(){
    return(
     <View style = {{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
     }}>
       getTransactions = () => {
    db.collection("transactions")
     .get()
     .then(snapshot =>{
        snapshot.docs.map(doc=> {
            this.setState({
            allTransactions: [...this.state.allTransactions,doc.data()]

            })
        })
     })
   }
   
      <View style = {{flex:0.4}}>
      <Text>
      Manga
      </Text>
      <Button title="Criar Manga" onPress={()=> this.props.navigation.navigate("CreateManga")}/>
    
    </View>
    <View style = {{flex:0.6}}>
    
    </View>
     </View>   
    )

}
}