import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import Input from './div/input.js'
import Radio from './div/radio.js'
import Check from './div/check.js'
export default class Froms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', email: '', gender: 'f', cou: '',
            cou1: '', dataStorage: [],
        }
    }
    json = () => {
        console.log(".........Api.............");

        let x = this.state.dataStorage;
        const result = Object.keys(x).map(key => ({ [key]: x[key] }));
        console.log(result);
    }

    _add = () => {

        let dataStorage = [{ name: this.state.name, email: this.state.email, gender: this.state.gender, cou: this.state.cou, cou1: this.state.cou }, ...this.state.dataStorage]
        console.log(dataStorage)
        this.setState({ dataStorage })
    }
    getname = (name, email) => {
        this.state.name = name;
        this.state.email = email;

    }
    getradios = (g) => {
        this.state.gender = g;
    }
    getchval = (cou, cou1) => {
        this.state.cou = cou;
        this.state.cou1 = cou1;
    }

    render() {
        return (
            <View style={{ flexDirection: "column" }}>
                <Input get={this.getname} />
                <Radio getradio={this.getradios} />
                <Check getcheck={this.getchval} />
                <View style={{ marginLeft: 20, marginRight: 20, flexDirection: "row" }} >
                    <TouchableOpacity style={styles.addButton}
                        onPress={this._add}>
                        <Text style={styles.button}>ADD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addButton}

                        onPress={this.json}>
                        <Text style={styles.button}>json</Text>
                    </TouchableOpacity>
                </View>
            </View>


        )
    }
}


const styles = StyleSheet.create({



    button: {
        fontSize: 20,
        color: 'white',
        width: 120,
        marginTop: 8,
        marginRight: 10,
        borderRadius: 10,
        backgroundColor: '#c01c00',
        padding: 8,
        textAlign: 'center'

    }


});
