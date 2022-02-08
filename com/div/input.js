import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

const input = (props) => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');

    props.get(name, email)
    return (
        <View>
            <TextInput
                onChangeText={(text) => setname(text)}
                value={name}
                placeholder='Name'
                style={styles.input}

            />
            <TextInput

                value={email}
                onChangeText={(text) => setemail(text)}
                placeholder='Email'
                style={styles.input}


            />
        </View>
    );
};

const styles = StyleSheet.create({

    input: {
        fontSize: 18,
        borderWidth: 1,
        marginLeft: 30,
        marginTop: 10,
        padding: 10,
        width: '80%',
        borderRadius: 10,
        backgroundColor: 'white',

    }
})



export default input;
