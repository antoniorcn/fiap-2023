import React from 'react';
import {Button, ScrollView, Text, TextInput, View} from 'react-native';

class PizzariaFormulario extends React.Component {
	constructor(props) { 
		super(props)
		this.state = {sabor: "", preco: "", 
					tamanho: "", lista: []}
	}

	render() { 
		const listaVisual = [];
		for (let i = 0; i < this.state.lista.length; i++){ 
			const o = this.state.lista[i];
			const elemento = (
				<View style={{borderColor: "red", borderWidth: 3, mragin: 5}} key={"k-" + i}>
					<Text>{o.sabor}</Text>
					<Text>{o.preco}</Text>
					<Text>{o.tamanho}</Text>
				</View>
			);
			listaVisual.push(elemento);
		}

		return (
			<View style={{flex: 1}}>
				<View style={{flex: 1}}>
					<Text>Sabor</Text>
					<TextInput value={this.state.sabor} 
						onChangeText={(txt)=>{
								this.setState({sabor: txt})}}/>
					<Text>Preço</Text>
					<TextInput value={this.state.preco} 
						onChangeText={(txt)=>{
								this.setState({preco: txt})}}/>
					<Text>Tamanho</Text>
					<TextInput value={this.state.tamanho} 
						onChangeText={(txt)=>{
								this.setState({tamanho: txt})}}/>
					<Button title="Salvar" onPress={()=>{
						const obj = {sabor: this.state.sabor,
								preco: this.state.preco,
								tamanho: this.state.tamanho}
					this.setState({lista: [...this.state.lista, obj]})
					}}/>
				</View>
				<ScrollView style={{flex: 1, backgroundColor: "lightgray"}}>
					{listaVisual}
				</ScrollView>
			</View>
		);
	}
}

export default () =>
<View style={{flex: 1}}>
	<View style={{flex: 3, backgroundColor: "royalblue", justifyContent: "center",
alignItems: "center"}}>
		<Text style={{fontSize: 32}}>Pizzaria Brasa</Text>
	</View>
	<View style={{flex: 7}}>
		<PizzariaFormulario/>
	</View>
</View>
