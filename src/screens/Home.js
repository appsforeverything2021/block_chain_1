import React from 'react';
import { View, Linking, Dimensions, Image } from 'react-native';
import {
	Layout,
	TopNav,
	Text,
	Button,
	Section,
	SectionContent,
} from 'react-native-rapi-ui';
import { Ionicons } from '@expo/vector-icons';
import ProgressCircle from 'react-native-progress-circle';
import Bitcoin from '../../assets/Bitcoin-Logo.png';

export default function ({ navigation }) {
	return (
		<Layout>
			<TopNav 
			leftContent={<Ionicons name="menu" size={24} color={'#FFF'} />}
			backgroundColor="#0d1322" />
			<View style={{ flex: 1 }}>
				<Section style={{ marginVertical: 10 }}>
					<SectionContent style={{ flexDirection: 'row', alignContent: 'space-between', padding: 20 }}>
						<View>
							<Text style={{ fontSize: 20, color: '#66707e', marginBottom: 10 }}>Balance total</Text>
							<Text style={{ fontSize: 28, color: '#000', marginBottom: 10 }}>$0.00</Text>
							<Text style={{ color: '#69aaa9' }}>$0.00(--)</Text>
						</View>
						<View style={{ marginLeft: (Dimensions.get('window').width - 250) }}>
							<ProgressCircle
								percent={0}
								radius={50}
								borderWidth={6}
								color="#3399FF"
								shadowColor="#999"
								bgColor="#fff"
							>
								{/*<Text style={{ fontSize: 18 }}>{'30%'}</Text>*/}
							</ProgressCircle>
						</View>
						
					</SectionContent>
				</Section>
				<Section style={{ marginVertical: 5, borderTopColor: '#000',  borderTopWidth: 0.2 }}>
					<SectionContent style={{ flexDirection: 'row', borderBottomColor: '#000', borderBottomWidth: 0.2 }}>
						<View >
							<Image source={require('../../assets/Bitcoin-Logo.png')} style={{ height: 35, width: 35 }} />
						</View>
						<View style={{ paddingHorizontal: 10 }}>
							<Text style={{ fontSize: 22 }}>Bitcoin</Text>
							<View style={{ paddingTop: 8 }}>
								<Text style={{ fontSize: 18 }}>$0.00</Text>
								<Text style={{ fontSize: 18 }}>0 BTC</Text>
							</View>
						</View>
					</SectionContent>
					<SectionContent style={{ flexDirection: 'row', borderBottomColor: '#000', borderBottomWidth: 0.2 }}>
						<View >
							<Image source={require('../../assets/ether.png')} style={{ height: 35, width: 35 }} />
						</View>
						<View style={{ paddingHorizontal: 10 }}>
							<Text style={{ fontSize: 22 }}>Ether</Text>
							<View style={{ paddingTop: 8 }}>
								<Text style={{ fontSize: 18 }}>$0.00</Text>
								<Text style={{ fontSize: 18 }}>0 ETH</Text>
							</View>
						</View>
					</SectionContent>
				</Section>
			</View>
		</Layout>
	);
}
