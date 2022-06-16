import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, FlatList } from "react-native";

export default function HomeScreen({ navigation }) {

  const [datos, setDatos] = useState([]); //ARREGLO DATOS COMIENZA VACIO

  //PROMESAS 
  const getPosts = async() => {
    try{
      const url = "https://jsonplaceholder.typicode.com/posts"; //EN DONDE HACE EL GET
      const response = await fetch(url); //consumir los datos TRAEMOS LOS DATOS
      const json = await response.json(); //convertir a json 
      setDatos(json); //CAMBIAMOS LOS DATOS, EL ESTADO
    } catch (error) {
      console.error(error); //MOSTRAR ERROR
    } 
  }


  useEffect(()=>{  //MOSTRAR TODO LO QUE TIENE EL GET
    getPosts();
  }, [])

  return (
    <SafeAreaView> 
      
      <FlatList 
              data={datos}  // EL JSON
              keyExtractor = { ({ id }, index) => id }
              renderItem = {
                ({item}) => (
                  <Text onPress={   //CUANDO HAGAMOS CLICK NOS MANDA A NAVIGATION

                    () => {
                      navigation.navigate('Detail',{ itemId: item.id })
                    }

                  }>{item.title}</Text>
                )
              }
      />

    </SafeAreaView>
  );
}