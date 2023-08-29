import React from 'react';
import AppScreen from './screens/AppScreen';
import OrdenarScreen from './screens/OrdenScreen';
import store from './components/store.js'

import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

 function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>      
            <Stack.Navigator initialRouteName="App">
                <Stack.Screen name="App" component={AppScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Ordenar" component={OrdenarScreen} options={{ headerShown: true }} />
            </Stack.Navigator>      
        </NavigationContainer>
    </Provider>  
  );
}

export default App; 