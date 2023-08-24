import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
import { useFonts, Questrial_400Regular } from '@expo-google-fonts/questrial';
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../components/cartActions';

function Orden() {
	const route = useRoute();
	const cartItems = useSelector((state) => state.cartItems);
	const dispatch = useDispatch();

	const handleSubtotal = (cantidad, precio) =>{
		const subtotaL = cantidad * precio
		return subtotaL;
	}

	const handleTotal = (cantidadLitros, precioLitro, cantidadMedios, precioMedio) =>{
		const total = handleSubtotal(cantidadLitros, precioLitro) + handleSubtotal(cantidadMedios, precioMedio);
		return total;
	}

	const handleTotalAmount = () => {
    	let totalAmount = 0;
    	for (const item of cartItems) {
      		totalAmount += handleTotal(item.cantidadLitros, item.precioLitro, item.cantidadMedios, item.precioMedio);
    	}
    	return totalAmount;
  	};


	let [fontsLoaded, fontError] = useFonts({
    	Questrial_400Regular,
  	});

  	if (!fontsLoaded && !fontError) {
    	return null;
  	}

  	const handleRemoveItem = (index) => {
    	dispatch(removeFromCart(index))
  	};

	return(
		<LinearGradient
			colors={['#9ddef9', '#98d6ff', '#9bcdff', '#a7c2ff', '#b8b5fe', '#c4b7fb', '#cfb9f9', '#d9bbf6', '#e0cdfa', '#e8defd', '#f3efff', '#ffffff']}
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center'				
			}}
		>
			<ScrollView>
				<Card
					elevation={5}
					style={{
						width: 300,
						marginTop: 20
					}}
				>
					<Card.Content>
						{cartItems.map((item, index) => (

    			    		<View key={index}>
    			    		  <Text 
    			    		  	style={{ 
    			    		  		fontFamily: 'Questrial_400Regular' 
    			    		  	}}
    			    		  >
    			    		  	{item.nombre}
    			    		  </Text>

    			    		  <Text style={{ fontFamily: 'Questrial_400Regular' }}>Cantidad: {item.cantidadLitros} litros</Text>
    			    		  <Text style={{ fontFamily: 'Questrial_400Regular' }}>Cantidad: {item.cantidadMedios} medios</Text>
    			    		  <Text style={{ fontFamily: 'Questrial_400Regular' }}>Subtotal Litros: ${handleSubtotal(item.cantidadLitros, item.precioLitro)}.00</Text>
    			    		  <Text style={{ fontFamily: 'Questrial_400Regular' }}>Subtotal Medios: ${handleSubtotal(item.cantidadMedios, item.precioMedio)}.00</Text>
    			    		  <Text style={{ fontFamily: 'Questrial_400Regular' }}>Total: ${handleTotal(item.cantidadLitros, item.precioLitro, item.cantidadMedios, item.precioMedio)}.00</Text>

    			    		  <Button style={{ marginTop: 10 }} onPress={() => handleRemoveItem(index)}>Quitar</Button>
    			    		</View>
    			    				
    					))}

    					<Text
            			  style={{
            			    fontFamily: 'Questrial_400Regular',
            			    textAlign: 'center',
            			    marginTop: 10,
            			    fontSize: 18,
            			  }}
            			>
              				Total a pagar: ${handleTotalAmount().toFixed(2)}
            			</Text>

					</Card.Content>
				</Card>
				
    			{cartItems.length > 0 && (
    				<View>
						<Button 
    			    		mode='contained' 
    			    		onPress={handleRemoveItem}
    			    		style={{ marginTop: 20}}
    			    	>
    			    		Limpiar Orden
    			    	</Button>

    			    	<Button
    			    		mode='contained'
    			    		buttonColor= '#9ddef9' 
    			    		style={{ 
    			    			marginTop: 20    			    			
    			    		}}
    			    	>
    			    		Enviar Orden
    			    	</Button>
    				</View>
    			    
    		    )}							
			</ScrollView>
		</LinearGradient>
		)
}

export default Orden;