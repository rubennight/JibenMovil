import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

function App() {
  return (
      <LinearGradient 
        colors={['#9ddef9', '#98d6ff', '#9bcdff', '#a7c2ff', '#b8b5fe', '#c4b7fb', '#cfb9f9', '#d9bbf6', '#e0cdfa', '#e8defd', '#f3efff', '#ffffff']}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text>
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </LinearGradient>
  );
}

export default App;