import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Questrial_400Regular } from '@expo-google-fonts/questrial';

import JibenLogo from '../assets/El-jiben-Logo.png';

import { CartProvider } from '../context/CartContext.js';
import DrinksCard from '../components/DrinksCard.js';

function preparadito(src, nombre, descripcion, precioLitro, precioMedio){
  return {src, nombre, descripcion, precioLitro, precioMedio}
}

const preparaditos = [
  preparadito('https://i.imgur.com/A3rRuzd.png', 'VibraVodka', 'Vodka acompañado de una bebida energética con sabor a arándano, refresco de lima y toques de diversión con gomitas.', 100.00, 40.00),
  preparadito('https://i.imgur.com/77eGyctt.png', 'PulsoChill', 'Vodka mezclado con una refrescante combinación de bebida energética, toques suaves de granadina y soda de fresa.', 100.00, 40.00),
  preparadito('https://i.imgur.com/LYTq3xJt.png', 'ChamoyFusion', 'Un preparadito, único y de tintes deliciosos', 100.00, 40.00),
  preparadito('https://i.imgur.com/abScrcCt.png', 'Leon Jiben', 'Un Leon Rojo, fusión audaz de salsas negras y sal rosa, realzada con un escarchado de chile en polvo con chamoy que despierta tus sentidos. Añadiendo un toque vibrante, el limón fresco se entrelaza con el distintivo lemon pepper. Una experiencia culinaria de valiente sabor y pasión.', 100.00, 80.00)
];

function AppScreen() {

  let [fontsLoaded, fontError] = useFonts({
    Questrial_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
      <CartProvider>      
        <ScrollView>
          <LinearGradient 
            colors={['#9ddef9', '#98d6ff', '#9bcdff', '#a7c2ff', '#b8b5fe', '#c4b7fb', '#cfb9f9', '#d9bbf6', '#e0cdfa', '#e8defd', '#f3efff', '#ffffff']}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          > 

            <View 
              style={{ 
                marginTop: 50,
                alignItems: 'center'
              }}
            >

              <Image 
                source={JibenLogo} 
                style={{
                  width: 300,
                  height: 300
                }} 
              />

              <Text 
                style={{ 
                  fontSize: 24, 
                  marginTop: 20,
                  marginBottom: 20,
                  textAlign: 'center',
                  fontFamily: 'Questrial_400Regular'
                }}
              >
                Bienvenido
              </Text>
              <Text 
                style={{ 
                  fontSize: 16, 
                  textAlign: 'justify', 
                  margin: 20,
                  lineHeight: 24,
                  fontFamily: 'Questrial_400Regular' 
                }}
              >
                Sumérgete en un mundo de sabores únicos y mezclas vibrantes en Jiben Drinks. 
                Nuestros "preparaditos" de autor ofrecen una emocionante fusión de sabor y diversión, 
                combinando a la perfección ingredientes de calidad con creatividad única. Eleva tu 
                experiencia de bebidas con nosotros.
              </Text>
            </View>   
            

            {preparaditos.map((preparadito, index) => (
              <DrinksCard
                key={index}
                src={preparadito.src}
                nombre={preparadito.nombre}
                descripcion={preparadito.descripcion}
                precioLitro={preparadito.precioLitro}
                precioMedio={preparadito.precioMedio}
              />
            ))}

            <StatusBar style="auto" />
          </LinearGradient>  
        </ScrollView>
      </CartProvider>  
  );
}

export default AppScreen;