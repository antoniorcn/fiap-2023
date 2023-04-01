import React from 'react';
import {Button, Text, TextInput, ScrollView, View} 
		from 'react-native';


class CafeFormulario extends React.Component { 

	constructor(props) {
		super(props);
		this.state = {nome: "", imagem: "", 
						preco: "", lista: []};
	}
	
	render() {
		const listaVisual = [];
		for (let i = 0; i < this.state.lista.length; i++) {
			const o = this.state.lista[i]; 
			listaVisual.push(
					<View style={{borderWidth: 1,
						borderColor:"orange", 
						margin: 5, 
						alignItems: "center"}}>
						<Text>{o.nome}</Text>
						<Text>{o.preco}</Text>
					</View>
			);
		}
		return (
			<View style={{flex: 1}}>
				<View style={{flex: 1}}>
					<Text>Nome da Bebida</Text>
					<TextInput value={this.state.nome}
								onChangeText={(txt)=>{
									this.setState({nome: txt})
					}}/>
					<Text>Nome da Imagem</Text>
					<TextInput value={this.state.imagem}
								onChangeText={(txt)=>{
									this.setState({imagem: txt})
					}}/>
					<Text>Preço</Text>
					<TextInput value={this.state.preco}
								onChangeText={(txt)=>{
									this.setState({preco: txt})
					}}/>
					<Button title="Salvar" onPress={()=>{
						const obj = {nome: this.state.nome,
										imagem: this.state.imagem,
										preco: this.state.preco};
						this.setState({
							lista: [...this.state.lista, obj]});
					}}/>
				</View>
				<ScrollView style={{flex: 1, 
										backgroundColor: "burlywood"}}>
					{listaVisual}
				</ScrollView>
			</View>
		);
	}

}

export default () =>
	<View style={{flex: 1}}>
		<View style={{flex: 3, 
						backgroundColor: "burlywood"}}>
			<Text>Java Café</Text>
		</View>
		<View style={{flex: 7}}>
			<CafeFormulario/>
		</View>
	</View>