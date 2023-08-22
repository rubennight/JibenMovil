import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
import { useFonts, Questrial_400Regular } from '@expo-google-fonts/questrial';

const DrinksCard = ({src, nombre, descripcion, precioLitro, precioMedio}) => {

	/*const handleOnPress = () => {

	}*/

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
					subtitle={"L: $"+precioLitro+" | 1/2: $"+precioMedio}
					style={{ 
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
					<Card.Actions>
						<Button mode="outlined">Ordenar</Button>
					</Card.Actions>
				</Card.Content>
			</Card>
		)
}

export default DrinksCard;