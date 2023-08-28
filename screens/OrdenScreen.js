import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Card, Button, Title, Paragraph, Dialog, Portal, PaperProvider, TextInput, Checkbox } from 'react-native-paper';
import { useFonts, Questrial_400Regular } from '@expo-google-fonts/questrial';
import { useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../components/cartActions';

function Orden() {
	const route = useRoute();
	const cartItems = useSelector((state) => state.cartItems);
	const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);
    const [text, setText] = useState("");
    const [checkedSPAUAZ, setCheckedSPAUAZ] = useState(false);
    const [checkedOdontologia, setCheckedOdontologia] = useState(false);
    const [checkedGavilanes, setCheckedGavilanes] = useState(false);

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

    const handleCheckboxToggle = (checkboxName) => {
        if (checkboxName === 'SPAUAZ') {
            setCheckedSPAUAZ(true);
            setCheckedOdontologia(false);
            setCheckedGavilanes(false);
        } else if (checkboxName === 'Odontologia') {
            setCheckedSPAUAZ(false);
            setCheckedOdontologia(true);
            setCheckedGavilanes(false);
        } else if (checkboxName === 'Gavilanes') {
            setCheckedSPAUAZ(false);
            setCheckedOdontologia(false);
            setCheckedGavilanes(true);
        }
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

    const handleClearItems = () => {
        dispatch(clearCart());
    }

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
                <Title style={{
                    fontFamily: 'Questrial_400Regular',
                    textAlign: 'center',
                    marginTop: 20,
                }}
                >
                    Carrito
                </Title>
                <Text style={{
                    fontSize: 16,
                    textAlign: 'justify',
                    margin: 20,
                    lineHeight: 24,
                    fontFamily: 'Questrial_400Regular'
                }}>
                    Este es tu carrito, aqui estaran las bebidas que gustes con el precio desglosado, puedes regresar a la pantalla principal
                    y escoger mas sin ningun problema ;)
                </Text>

                <View
                    style={{
                        alignItems: 'center'
                    }}
                >
                    <Card
                        elevation={5}
                        style={{
                            width: 300,
                            marginTop: 20,
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
                </View>

                <Title style={{
                    textAlign: 'center',
                    marginTop: 30,
                }}>
                    Rincon del Agua Chile
                </Title>

                <Text style={{
                    fontSize: 16,
                    margin: 20,
                    marginTop: 20,
                    textAlign: 'justify',
                    fontFamily: 'Questrial_400Regular'
                }}>
                     Colonia SPAUAZ, a un costado del UPN, calle Real de el Eden S/N, Guadalupe, Zacatecas 
                </Text>

                <View style={{ alignItems: 'center' }}>
                    <Checkbox
                        status={checkedSPAUAZ ? 'checked' : 'unchecked'}
                        onPress={() => {
                            handleCheckboxToggle('SPAUAZ');
                        }}
                    /> 
                </View>

                <Text style={{
                    fontSize: 16,
                    margin: 20,
                    marginTop: 20,
                    textAlign: 'justify',
                    fontFamily: 'Questrial_400Regular'
                }}>
                    Av. Colegio Militar, en contra esquina de la facultad de Odontologia, Guadalupe, Zacatecas
                </Text>

                <View style={{ alignItems: 'center' }}>
                    <Checkbox
                        status={checkedOdontologia ? 'checked' : 'unchecked'}
                        onPress={() => {
                            handleCheckboxToggle('Odontologia');
                        }}
                    />
                </View>

                <Title style={{
                    textAlign: 'center',
                    marginTop: 30,
                }}>
                    Sucursal Preparaditos Jiben
                </Title>

                <Text style={{
                    fontSize: 16,
                    margin: 20,
                    marginTop: 20,
                    textAlign: 'justify',
                    fontFamily: 'Questrial_400Regular'
                }}>
                    Av. Gavilanes, 257, Guadalupe, Zacatecas
                </Text>

                <View style={{ alignItems: 'center' }}>
                    <Checkbox
                        status={checkedGavilanes ? 'checked' : 'unchecked'}
                        onPress={() => {
                            handleCheckboxToggle('Gavilanes');
                        }}
                    />
                </View>

    			{cartItems.length > 0 && (
    				<View>
						<Button 
    			    		mode='contained' 
    			    		onPress={handleClearItems}
    			    		style={{ marginTop: 20}}
    			    	>
    			    		Limpiar Orden
    			    	</Button>

    			    	<Button
    			    		mode='contained'
                            buttonColor='#9ddef9'
                            onPress={() => setVisible(true)}
    			    		style={{ 
    			    			marginTop: 20    			    			
    			    		}}
    			    	>
    			    		Enviar Orden
    			    	</Button>
    				</View>
    			    
                )}						
                {visible && (
                    <Dialog
                        visible={visible}
                        onDismiss={() => setVisible(false)}
                    >
                        <Dialog.Title style={{
                            fontFamily: 'Questrial_400Regular',
                            justifyContent: 'center',
                            lineHeight: 24,
                        }}
                        >
                            Proporcionanos un numero de telefono para confirmar tu orden por WhatsApp.
                        </Dialog.Title>
                        <Dialog.Content>
                            <TextInput
                                label="Numero"
                                value={text}
                                onChangeText={text => setText(text)}
                            />
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button mode="contained" buttonColor='#9ddef9'>
                                Enviar Orden
                            </Button>
                        </Dialog.Actions>
                    </Dialog>
                )}
			</ScrollView>
		</LinearGradient>
		)
}

export default Orden;