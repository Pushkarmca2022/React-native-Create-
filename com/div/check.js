import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Checkbox } from 'react-native-paper';

const check = (props) => {
    const [cou, getcou] = useState('No')
    const [cou1, getcou1] = useState('No')
    props.getcheck(cou, cou1);
    return (
        <View style={{
            // Try setting `flexDirection` to `"row"`.
            margin: 20,

            flexDirection: "row",
        }}>
            <Checkbox style={{ marginRight: 30 }}
                status={cou == "Yes" ? 'checked' : 'unchecked'}
                onPress={() => { getcou("Yes"); }}
            />
            <Text style={{ fontSize: 20 }}>computer</Text>
            <Checkbox

                status={cou1 == "Yes" ? 'checked' : 'unchecked'}
                onPress={() => { getcou1("Yes") }}
            />
            <Text style={{ fontSize: 20 }}>Mobile</Text>
        </View>
    );
};

export default check;
