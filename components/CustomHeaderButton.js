import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
// May need to run npm install --save this dependency... try building first!
import { Ionicons } from '@expo/vector-icons';

const CustomHeaderButton = props => {
    <ion-icon name="add-circle-outline"></ion-icon>
    return <HeaderButton {...props} IconComponent={Ionicons} color={Platform.OS === 'android' ? 'black' : 'blue'} />
}


export default CustomHeaderButton;