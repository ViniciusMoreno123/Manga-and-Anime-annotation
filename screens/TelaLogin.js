import React, {Component} from "react";
import { Text,View,Button,TouchableOpacity,TextInput,StyleSheet,Alert,KeyboardAvoidingView,Image} from "react-native";
import firebase from "firebase";
import db from "../config";

var Imagem = require("../assets/fundonovo.png")
export default class TelaLogin extends Component{
constructor(props){
  super(props);
  this.state = {
  email:"",
  senha:""
  }
}
loginUser = (email,senha) => {
  firebase.auth().signInWithEmailAndPassword(email,senha).then(()=>{
  this.props.navigation.navigate("TelaExp")
  
  })
  .catch(error =>{
    Alert.alert(error.message)
  })
}
render(){
  const {email,senha} = this.state
    return(
    <KeyboardAvoidingView style = {styles.keyboard} behavior = "padding">
      <View>
        <View style = {{
          flex:0.9,
          
        }}>
        <Image source={Imagem} style={styles.imagem}/>
        </View>
        <TextInput style = {styles.text} onChangeText = {texto =>{this.setState({email:texto})}} placeholder = {"insira seu email"}placeholderTextColor = {"white"} autoFocus/>
        <TextInput style = {styles.text} onChangeText = {texto =>{this.setState({senha:texto})}} placeholder = {"insira sua senha"}placeholderTextColor = {"white"} secureTextEntry/>
        <TouchableOpacity style = {styles.botao}onPress = {()=>{this.loginUser(email,senha)}} >
          <Text style = {styles.text2}>Clique para logar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    )

}
}
const styles = StyleSheet.create({
  keyboard: {
 flex:1,
  backgroundColor:"#DB1F2D",
  justifyContent:"center",
  alignItems:"center"
  },
  text:{
 width:250,
 height:40,
 padding:10,
 borderColor:"black",
 borderWidth:3,
 fontSize:17,
 color:"black",
 backgroundColor:"darkred",
 alignItems:"center",
 alignSelf:"center",
 justifyContent:"center",
 marginTop:5
  },
  text2:{
fontSize:20,
textAlign:"center",
color:"white",
fontWeight:"bold",

  },
  botao:{
 width:250,
 height:40,
 alignItems:"center",
 backgroundColor:"black",
 alignSelf:"center",
 justifyContent:"center"
 
  },
  imagem:{
  width:400,
  height:400,
  resizeMode:"contain",
  justifyContent:"flex-start",
  alignSelf:"flex-start",
  alignItems:"flex-start",

  
  
  }
})