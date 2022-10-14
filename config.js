
import firebase from "firebase/app";
require("@firebase/firestore")


const firebaseConfig = {
  apiKey: "AIzaSyD9E0A0arrXY5r7_wWl2MQjpEUU2qewNw0",
  authDomain: "manga-and-anime-annotation.firebaseapp.com",
  projectId: "manga-and-anime-annotation",
  storageBucket: "manga-and-anime-annotation.appspot.com",
  messagingSenderId: "802074067563",
  appId: "1:802074067563:web:ec1a0a63d40e94f1d8672e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore()