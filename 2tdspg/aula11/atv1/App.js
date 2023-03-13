import React from 'react'
import {Button, View, Text} from 'react-native'


class Principal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sumir: false}
    }
    render() {
        let mostrar = "flex"
        if (this.state.sumir) { 
            mostrar = "none"
        }
        return (
            <View style={{marginTop: 50}}>
                <Text style={{display: mostrar}}>
                    Clique para sumir</Text>
                <Text>{this.state.sumir.toString()}</Text>
                <Button title="Clique" onPress={()=>{
                    this.setState({sumir: !this.state.sumir})
                }}/>
            </View>
        )
    }
};

export default Principal;

