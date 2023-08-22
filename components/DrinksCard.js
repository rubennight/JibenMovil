import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';

const DrinksCard = ({src, nombre, descripcion, precioLitro, precioMedio}) => {
	return(
			<Card style={{
				margin: 10, 
				width: 300,
			}}>
				<Card.Cover source={{uri: src}} />
				<Card.Title title={nombre} subtitle={"L: $"+precioLitro+" | 1/2: $"+precioMedio} />				
				<Card.Content>
					<Paragraph>
						{descripcion}
					</Paragraph>
					<Card.Actions>
						<Button mode="contained">Ordenar</Button>
					</Card.Actions>
				</Card.Content>
			</Card>
		)
}

export default DrinksCard;