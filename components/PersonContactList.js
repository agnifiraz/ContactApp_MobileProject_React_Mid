import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';


const PersonContactList = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onAdd.bind(this, props.id)}>
            <View style={styles.listItem} >
                <Text >{props.item}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PersonContactList;