import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Card, Button , Title ,Paragraph, IconButton } from 'react-native-paper';
import { useFonts, Questrial_400Regular } from '@expo-google-fonts/questrial';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartActions';

const DrinksCard = ({src, nombre, descripcion, precioLitro, precioMedio}) => {
	const [cantidadLitros, setCantidadLitros] = useState(0);
	const [cantidadMedios, setCantidadMedios] = useState(0);

	const dispatch = useDispatch();
	const navigation = useNavigation();

	const handleBlueArrowUpOnPress = () => {
		setCantidadLitros(cantidadLitros+1);
	}

	const handleBlueArrowDownOnPress = () => {
		setCantidadLitros(cantidadLitros-1);
		if(cantidadLitros < 0){
			setCantidadLitros(0);
		}
	}

	const handlePurpleArrowUpOnPress = () => {
		setCantidadMedios(cantidadMedios+1);
	}

	const handlePurpleArrowDownOnPress = () => {
		setCantidadMedios(cantidadMedios-1);
		if(cantidadMedios < 0){
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

	return(
			<Card 
				elevation={5}
				style={{
					margin: 10, 
					width: 300,
				}}
			>
				<Card.Cover source={{uri: src}} />
				<Card.Title 
					title={nombre} 
					subtitle={"L: $"+precioLitro+".00"+" | 1/2: $"+precioMedio+".00"}
					titleStyle={{ 
						fontFamily: 'Questrial_400Regular',						
					}} 
					/>				
				<Card.Content>
					<Paragraph 
						style={{
							textAlign: 'justify',
							fontFamily: 'Questrial_400Regular'
						}}>
							{descripcion}
					</Paragraph>
				</Card.Content>	
				<Card.Actions style={{ alignItem: 'left' }}>
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


				</Card.Actions>
				<Card.Actions>
					<Text 
						style={{ 
							marginRight: 15 
						}}
					>
						1/2s:          {cantidadMedios}
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
					
				</Card.Actions>
				<Card.Actions>
					<Button 
						mode="outlined" 
						onPress={handleOnPress}
						style={{marginBottom: 10}}
					>
						Ordenar
					</Button>
				</Card.Actions>
			</Card>
		)
}

export default DrinksCard;