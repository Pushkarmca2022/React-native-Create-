import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { RadioButton, Checkbox } from 'react-native-paper';

export default function radio(props) {

    const [g, setg] = useState('M');

    props.getradio(g);
    return (
        <View style={{
            marginTop: 20,
            marginLeft: 40,

            flexDirection: "row",
        }}>
            <RadioButton
                value="M"
                status={g === 'M' ? 'checked' : 'unchecked'}
                onPress={() => { setg('M') }}
            />
            <Text>M</Text>
            <RadioButton
                value="F"
                status={g === 'F' ? 'checked' : 'unchecked'}
                onPress={() => { setg('F') }}
            />
            <Text>F</Text>
        </View>
    );
}
