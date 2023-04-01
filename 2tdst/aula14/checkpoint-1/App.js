import React from 'react';
import {Button, ScrollView, Text, TextInput, View} from 'react-native';

	function gerarElementoVisual( obj, num ) { 
		return (
			<View style={{justifyContent: "center",
						alignItems: "center", margin: 5, 
						borderColor: "orange", borderWidth: 1}}
					 key={"#" + num}>
				<Text>{obj.nome}</Text>
				<Text>{obj.preco}</Text>
			</View>
		);
	}

class CafeFormulario extends React.Component { 
	constructor(props) { 
		super(props);
		this.state = {nome: "", imagem: "", preco: "", 
								lista: []} 
	}

	render() { 
		const listaVisual = [];
		for (let i = 0; i < this.state.lista.length; i++){
			let o = this.state.lista[i];
			listaVisual.push( gerarElementoVisual( o, i ) );
		}
		return (
			<View style={{flex: 1}}>
				<View style={{flex: 1}}>
					<Text>Nome da bebida:</Text>
					<TextInput value={this.state.nome}
						onChangeText={(txt)=>{
							this.setState({nome: txt});
						}}/>
					<Text>Nome da imagem:</Text>
					<TextInput value={this.state.imagem}
						onChangeText={(txt)=>{
							this.setState({imagem: txt});
						}}/>
					<Text>Preço:</Text>
					<TextInput value={this.state.preco}
						onChangeText={(txt)=>{
							this.setState({preco: txt});
						}}/>
					<Button title="Salvar" onPress={()=>{
						const obj = {nome: this.state.nome,
									imagem: this.state.imagem,
									preco: this.state.preco};
						this.setState(
							{lista: [...this.state.lista, obj]}
						);
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
		<View style={{flex: 3, background: "burlywood",
			justifyContent: "center", alignItems: "center"
		}}>
			<Text style={{fontSize: 34}}>Java Café</Text>
		</View>
		<View style={{flex: 7}}>
			<CafeFormulario/>
		</View>
	</View>