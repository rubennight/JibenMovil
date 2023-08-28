import React, { useState } from 'react'
import { Title, Paragraph, IconButton, TouchableOpacity, Dialog, Portal, Button, PaperProvider } from 'react-native-paper';
import { Text, Image, ScrollView, View, Pressable } from 'react-native';
import { useFonts, Questrial_400Regular } from '@expo-google-fonts/questrial';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartActions';

const DrinksModal = ({ src, nombre, descripcion, precioLitro, precioMedio }) => {
	const [cantidadLitros, setCantidadLitros] = useState(0);
	const [cantidadMedios, setCantidadMedios] = useState(0);
	const [visible, setVisible] = useState(false);

	const dispatch = useDispatch();
	const navigation = useNavigation();

	const handleBlueArrowUpOnPress = () => {
		setCantidadLitros(cantidadLitros + 1);
	}

	const handleBlueArrowDownOnPress = () => {
		setCantidadLitros(cantidadLitros - 1);
		if (cantidadLitros < 0) {
			setCantidadLitros(0);
		}
	}

	const handlePurpleArrowUpOnPress = () => {
		setCantidadMedios(cantidadMedios + 1);
	}

	const handlePurpleArrowDownOnPress = () => {
		setCantidadMedios(cantidadMedios - 1);
		if (cantidadMedios < 0) {
			setCantidadMedios(0);
		}
	}

	const handleOnPress = () => {
		const drink = {
			nombre,
			precioLitro,
			precioMedio,
			cantidadLitros,
			cantidadMedios,
		};
		dispatch(addToCart(drink));
		navigation.navigate('Ordenar');
	};

	let [fontsLoaded, fontError] = useFonts({
		Questrial_400Regular,
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<PaperProvider>
			<Portal>
				<Dialog
					visible={visible}
					onDismiss={() => setVisible(false)}
					style={{
						margin: 10
					}}
				>
					<Dialog.Title 
						style={{
							fontFamily: 'Questrial_400Regular'
						}}
					>
						{nombre}
					</Dialog.Title>
					<Dialog.Title 
						style={{
							fontFamily: 'Questrial_400Regular'
						}}
					>
						{"L: $" + precioLitro + ".00" + " | 1/2: $" + precioMedio + ".00"}
					</Dialog.Title>

					<Dialog.Content>
						
							<Paragraph
								style={{
									textAlign: 'justify',
									fontFamily: 'Questrial_400Regular'
								}}
							>
								{descripcion}
							</Paragraph>

					</Dialog.Content>	
							<Dialog.Actions>
								<Text
									style={{
										marginRight: 15
									}}
								>
									Litros:          {cantidadLitros}
								</Text>

								<IconButton
									icon="arrow-up-bold"
									iconColor="#9ddef9"
									mode="contained"
									onPress={handleBlueArrowUpOnPress}
								/>

							<IconButton
								icon="arrow-down-bold"
								iconColor="#9ddef9"
								mode="contained"
								onPress={handleBlueArrowDownOnPress}
							/>
							</Dialog.Actions>
					<Dialog.Actions>
								<Text
									style={{
										marginRight: 15
									}}
								>
									1/2s:            {cantidadMedios}
								</Text>

								<IconButton
									icon="arrow-up-bold"
									iconColor="#c4b7fb"
									mode="contained"
									onPress={handlePurpleArrowUpOnPress}
								/>

								<IconButton
									icon="arrow-down-bold"
									iconColor="#c4b7fb"
									mode="contained"
									onPress={handlePurpleArrowDownOnPress}
								/>
							</Dialog.Actions>						
							<Dialog.Actions>
								<Button
									mode="outlined"
									onPress={handleOnPress}
									style={{
										marginTop: 10
									}}
								>
									Ordenar
								</Button>
							</Dialog.Actions>					
				</Dialog>
			</Portal>

			<Pressable onPress={() => setVisible(true)} style={{ alignItems: 'center' }}>
				<Image
					source={src}
					resizeMode="contain"
					style={{
						borderRadius: 50,					
					}}
				/>			
			</Pressable>			
		</PaperProvider>
	);
};

export default DrinksModal;