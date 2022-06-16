import React, { useEffect, useState } from 'react';
import { Text, Button, SafeAreaView } from "react-native";

export default function SettingsScreen({ route, navigation }) {  //RECIBIMOS LA RUTA Y NAVEGACIÓN
   //DECONSTRUCCION
    const { itemId } = route.params;  //VARIABLE QUE DEFINE LA RUTA
    const [post, setPost] = useState({});  //CAMBIA EL ESTADO

   const getPost = async() => {

    try{
      const url = `https://jsonplaceholder.typicode.com/posts/${itemId}`;  //CONCATENAMOS CON ITEM
      const response = await fetch(url); //consumir los datos
      const json = await response.json(); //convertir a json
      setPost(json);
      console.log(url);
    } catch (error) {
      console.error(error);

    }

  }
  useEffect(()=>{
    getPost();
  }, [itemId])

  return (

    <SafeAreaView>
      <Text>Id: {JSON.stringify(itemId)}</Text>
      <Text>Titulo: {post.title}</Text>
      <Text>Body: {post.body}</Text>

      <Button onPress={() =>{  //BOTON DE REGRESAR
        navigation.navigate('Home');
      }} title="REGRESAR" />
    </SafeAreaView>
  );
}