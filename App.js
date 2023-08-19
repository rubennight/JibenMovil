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
  return {src, nombre, descripcion}
}

const preparaditos = [
  preparadito(preparaditoAzul, 'VibraVodka', 'Vodka acompañado de una bebida energética con sabor a arándano, refresco de lima y toques de diversión con gomitas.'),
  preparadito(preparaditoRojo, 'PulsoChill', 'Vodka mezclado con una refrescante combinación de bebida energética, toques suaves de granadina y soda de fresa.'),
  preparadito(preparaditoChamoy, 'Chamoy', 'Un preparadito, único y de tintes deliciosos'),
  preparadito(preparaditoLeonRojo, 'Leon Jiben', 'Un Leon Rojo, fusión audaz de salsas negras y sal rosa, realzada con un escarchado de chile en polvo con chamoy que despierta tus sentidos. Añadiendo un toque vibrante, el limón fresco se entrelaza con el distintivo lemon pepper. Una experiencia culinaria de valiente sabor y pasión.' )
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
        />
      ))}


        <StatusBar style="auto" />
      </LinearGradient>  
        </ScrollView>
        
  );
}

export default App;