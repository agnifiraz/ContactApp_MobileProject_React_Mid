import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                headerMode="screen"
                screenOptions={{
                    headerTintColor: Platform.OS === 'android' ? 'grey' : 'blue',
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? 'white' : ''
                    }
                }}
            >
                <Stack.Screen
                    name="ScreenOne"
                    component={FirstScreen}
                    options={{
                        title: 'HOME',
                    }}
                />
                <Stack.Screen
                    name="ScreenTwo"
                    component={SecondScreen}
                    options={{
                        title: 'ADD CONTACT',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;