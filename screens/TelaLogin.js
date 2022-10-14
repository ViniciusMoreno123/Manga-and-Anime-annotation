import React, {Component} from "react";
import { Text,View,Button,TouchableOpacity,TextInput,StyleSheet,Alert,KeyboardAvoidingView } from "react-native";
import firebase from "firebase";
import db from "../config";
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
  backgroundColor:"black",
  justifyContent:"center",
  alignItems:"center"
  },
  text:{
 width:250,
 height:40,
 padding:10,
 borderColor:"white",
 borderWidth:3,
 fontSize:17,
 color:"black",
 backgroundColor:"gray",
 
  },
  text2:{
fontSize:20,
textAlign:"center",
color:"black",
fontWeight:"bold"
  },
  botao:{
 width:250,
 height:40,
 alignItems:"center",
 backgroundColor:"darkblue",
 
  }
})