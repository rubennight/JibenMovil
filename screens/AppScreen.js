import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Paragraph, Title } from 'react-native-paper'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Questrial_400Regular } from '@expo-google-fonts/questrial';

import JibenLogo from '../assets/El-jiben-Logo.png';
import preparaditoAzul from '../assets/preparaditoAzul.png';
import preparaditoRojo from '../assets/preparaditoRojo.png';
import preparaditoChamoy from '../assets/preparaditoChamoy.png';
import preparaditoJiben from '../assets/preparaditoLeonRojo.png';

import { CartProvider } from '../context/CartContext.js';
import DrinksCard from '../components/DrinksCard.js';
import DrinksModal from '../components/DrinksModal.js';

function preparadito(src, nombre, descripcion, precioLitro, precioMedio){
  return {src, nombre, descripcion, precioLitro, precioMedio}
}

const preparaditos = [
    preparadito(preparaditoAzul, 'VibraVodka', 'Vodka acompañado de una bebida energética con sabor a arándano, refresco de lima y toques de diversión con gomitas.', 100.00, 65.00),
    preparadito(preparaditoRojo, 'PulsoChill', 'Vodka mezclado con una refrescante combinación de bebida energética, toques suaves de granadina y soda de fresa.', 100.00, 65.00),
    preparadito(preparaditoChamoy, 'ChamoyFusion', 'Un preparadito, único y de tintes deliciosos', 100.00, 65.00),
    preparadito(preparaditoJiben, 'Leon Jiben', 'Un Leon Rojo, fusión audaz de salsas negras y sal rosa, realzada con un escarchado de chile en polvo con chamoy que despierta tus sentidos. Añadiendo un toque vibrante, el limón fresco se entrelaza con el distintivo lemon pepper. Una experiencia culinaria de valiente sabor y pasión.', 100.00, 80.00)
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
                      <Paragraph 
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
                      </Paragraph>
                      <Title style={{ marginTop: 20 }}>¿Cómo ordenar?</Title>
                      <Paragraph
                          style={{
                              fontSize: 16,
                              textAlign: 'justify',
                              margin: 20,
                              marginTop: 20,
                              lineHeight: 24,
                              fontFamily: 'Questrial_400Regular'
                          }}  
                      >
                          A pesar de ser una empresa local y pequeña, en Preparaditos Jiben estamos impulsados
                          por un espíritu emprendedor que nos motiva a desafiar los límites de la innovación en
                          cada creación que presentamos. Si bien, por el momento, no contamos con servicio a domicilio,
                          hemos pensado en tu comodidad. Puedes recoger tus preparados en diversas locaciones estratégicas
                          que te brindamos para tu conveniencia:

                      </Paragraph>
                      <Text style={{
                          fontSize: 16,
                          textAlign: 'justify',
                          margin: 20,
                          lineHeight: 24,
                          fontFamily: 'Questrial_400Regular',
                          fontWeight: 'bold'
                      }}  >
                              El Rincón del Agua Chile
                          </Text>
                      <Text style={{
                          fontSize: 16,
                          textAlign: 'justify',
                          margin: 20,
                          lineHeight: 24,
                          fontFamily: 'Questrial_400Regular',
                          fontWeight: 'bold'
                      }}  >
                            - Colonia SPAUAZ, a un costado del UPN, calle Real de el Edén S/N, Guadalupe, Zacatecas
                          </Text>
                      <Text style={{
                          fontSize: 16,
                          textAlign: 'justify',
                          margin: 20,
                          lineHeight: 24,
                          fontFamily: 'Questrial_400Regular',
                          fontWeight: 'bold'
                      }}  >
                            - Av. Colegio Militar, en contra esquina de la facultad de Odontología, Guadalupe, Zacatecas
                      </Text>           
                      <Text style={{
                          fontSize: 16,
                          textAlign: 'justify',
                          margin: 20,
                          lineHeight: 24,
                          fontFamily: 'Questrial_400Regular'
                      }}  >
                          Así como tamabién en:
                      </Text>       
                      <Text style={{
                          fontSize: 16,
                          textAlign: 'justify',
                          margin: 20,
                          lineHeight: 24,
                          fontFamily: 'Questrial_400Regular',
                          fontWeight: 'bold'
                      }}  >
                          - Av Gavilanes, 257, Guadalupe, Zacatecas
                      </Text>   
                      <Text style={{
                          fontSize: 16,
                          textAlign: 'justify',
                          margin: 20,
                          lineHeight: 24,
                          fontFamily: 'Questrial_400Regular'
                      }}  >
                          Pulsa sobre cualquier imagen que te llame la atención y podrás escoger entre llevarte un litro o medio litro,
                          se añadirá al carrito y siempre podrás volver a esta pantalla a pedir otra bebida.
                          Al culminar tu pedido, te solicitaremos un número telefónico para confirmar los detalles de
                          tu pedido a través de WhatsApp, garantizando así que cada aspecto de tu experiencia con nosotros
                          sea perfecto hasta el último sorbo.
                      </Text>   
                      <Text style={{
                          fontSize: 16,
                          textAlign: 'justify',
                          margin: 20,
                          lineHeight: 24,
                          fontFamily: 'Questrial_400Regular'
                      }}  >
                          ¡Descubre con valentía un espectro de sabores excepcionales en Jiben Drinks!
                      </Text>   
                  </View>   

                  <StatusBar style="auto" />
              </LinearGradient>           
                  {preparaditos.map((preparadito, index) => (
                      <DrinksModal
                          key={index}
                          src={preparadito.src}
                          nombre={preparadito.nombre}
                          descripcion={preparadito.descripcion}
                          precioLitro={preparadito.precioLitro}
                          precioMedio={preparadito.precioMedio}
                      />
                  ))}
          </ScrollView>
      </CartProvider>  
  );
}

export default AppScreen;