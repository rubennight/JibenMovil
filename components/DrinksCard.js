import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';

const DrinksCard = ({src, nombre, descripcion}) => {
	return(
			<Card>
				<Card.Cover source={{src}} />
				<Card.Content>
					<Title>
						{nombre}
					</Title>
				</Card.Content>
				<Card.Content>
					<Paragraph>
						{descripcion}
					</Paragraph>
					<Card.Actions>
						<Button>Ordenar</Button>
					</Card.Actions>
				</Card.Content>
			</Card>
		)
}

export default DrinksCard;