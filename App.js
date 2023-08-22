import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import preparaditoAzul from './assets/preparaditoAzul.png';
import preparaditoChamoy from './assets/preparaditoChamoy.png';
import preparaditoRojo from './assets/preparaditoRojo.png';
import preparaditoLeonRojo from './assets/preparaditoLeonRojo.png';
import preparaditoPromo from './assets/preparaditoPromo.png';

import DrinksCard from './components/DrinksCard.js';

function preparadito(src, nombre, descripcion, precioLitro, precioMedio){
  return {src, nombre, descripcion, precioLitro, precioMedio}
}

const preparaditos = [
  preparadito('https://i.imgur.com/A3rRuzd.png', 'VibraVodka', 'Vodka acompañado de una bebida energética con sabor a arándano, refresco de lima y toques de diversión con gomitas.', '100.00', '40.00'),
  preparadito('https://i.imgur.com/77eGyctt.png', 'PulsoChill', 'Vodka mezclado con una refrescante combinación de bebida energética, toques suaves de granadina y soda de fresa.', '100.00', '40.00'),
  preparadito('https://i.imgur.com/LYTq3xJt.png', 'Chamoy', 'Un preparadito, único y de tintes deliciosos', '100', '40'),
  preparadito('https://i.imgur.com/abScrcCt.png', 'Leon Jiben', 'Un Leon Rojo, fusión audaz de salsas negras y sal rosa, realzada con un escarchado de chile en polvo con chamoy que despierta tus sentidos. Añadiendo un toque vibrante, el limón fresco se entrelaza con el distintivo lemon pepper. Una experiencia culinaria de valiente sabor y pasión.', '100.00','80.00')
  ];

function App() {
  return (
      
        <ScrollView>
             <LinearGradient 
                colors={['#9ddef9', '#98d6ff', '#9bcdff', '#a7c2ff', '#b8b5fe', '#c4b7fb', '#cfb9f9', '#d9bbf6', '#e0cdfa', '#e8defd', '#f3efff', '#ffffff']}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >    
               <Text>
          Jiben Drinks
        </Text>

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
        
  );
}

export default App;