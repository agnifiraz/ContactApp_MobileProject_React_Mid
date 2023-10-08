import React, { useState } from 'react';
import { Text,View, TextInput, Button } from 'react-native';
import { styles } from '../styles/styles';

const SecondScreen = (props) => {
    const [enteredContactInfo, setContactInfo] = useState();
    const [enteredFirstName, setFirstName] = useState();
    const [enteredLastName, setLastName] = useState();


    const contactInfoInputHandler = (value) => {
        setContactInfo(value);
    }
    const nameInputHandler = (value) => {
        setFirstName(value);
    }
    const lastNameInputHandler = (value) => {
        setLastName(value);
    }
    
    const { onAddItem } = props.route.params;
    onAddItem(enteredFirstName,enteredLastName ,enteredContactInfo);

    return (
        <View>
            <Text style={styles.headerText}>Add Contact</Text>
            <View style={styles.saveInputContainer}>
            <Text style={styles.labelRegular}>First Name</Text>
            <TextInput placeholder="First Name" style={styles.saveInput} onChangeText={nameInputHandler} value={enteredFirstName} />
            <Text style={styles.labelRegular}>Last Name</Text>
            <TextInput placeholder="Last Name" style={styles.saveInput} onChangeText={lastNameInputHandler} value={enteredLastName} />
            <Text style={styles.labelRegular}>Email address</Text>
            <TextInput placeholder="Email address" style={styles.saveInput} onChangeText={contactInfoInputHandler} value={enteredContactInfo} />
            <View style={styles.button} ><Button title="Save" onPress={() => props.navigation.navigate('ScreenOne')} /></View>
            <View style={{marginBottom: 10}}/>
            {/* <Button style={styles.button} title="Go Back" onPress={ () => { props.navigation.goBack(); }} /> */}
            </View>
        </View>

    );
}

SecondScreen.navigationOptions = {
    headerTitle: 'Add Place'
}

export default SecondScreen;
