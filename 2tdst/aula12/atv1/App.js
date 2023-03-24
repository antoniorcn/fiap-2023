import React from 'react';
import {Button, View, Text} from 'react-native';

class Incrementador extends React.Component {

    constructor(props) {
        super(props);
        // this.numero = 10;
        this.state = {numero: 20};
    }

    render () {
        return (
            <View style={{flex: 1, marginTop: 50}}>
                <Text>Numero: {this.state.numero}</Text>
                <Button title="Incrementar" 
                    onPress={()=>{
                        this.setState(
                            {numero: this.state.numero + 1})
                    }}/>

                <Button title="Decrementar"
                    onPress={()=>{
                        this.setState(
                            {numero: this.state.numero - 1})
                    }}/>
            </View>
        );
    }
}

export default Incrementador;