import React, { useRef, useState } from 'react';
import { View, Text, Platform, TextInput, Button,FlatList, Dimensions, TouchableOpacity,Alert } from 'react-native';
import { styles } from '../styles/styles';
import PersonContactList from '../components/PersonContactList';
import { useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';



const FirstScreen = (props) => {
    const [contactList, setContactList] = useState([]);
    const route = useRoute();

    const addContactInfo = (firstNameInfo, lastNameInfo,contactInfo) => {
        setContactList([...contactList, {key: Math.random().toString(), val_FirstName: firstNameInfo, val_LastName: lastNameInfo,val_Contact: contactInfo}]);
      };
      React.useLayoutEffect(() => {
        props.navigation.setOptions({
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item 
                title="Add Contact" 
                iconSize={40}
                iconName={Platform.OS === 'android' ? 'add-circle-outline' : 'add-circle-outline'} 
                onPress={() => props.navigation.navigate('ScreenTwo', { onAddItem: addContactInfo })}
              />
            </HeaderButtons>
          ),
        });
      }, [props.navigation, addContactInfo]);


      const closeDialog = {
        text: 'Close', 
        onPress: () => Alert.alert(
          'Close', 
          'Thank you for choosing',
          [ 
            {
              text: 'Close'
            }
          ]
        )
      };
      sendMessageWithEmail = async (itemId) => {
        const isAvailable = await MailComposer.isAvailableAsync();
        if (isAvailable) {
          var options = {
            recipients: [itemId.val_Contact],
            subject: 'MailComposer',
            body: 'Dear ' + [itemId.val_FirstName] + ' ' + [itemId.val_LastName] + ', '
          };
         
          MailComposer.composeAsync(options)
          .then(result => {
            if (result.status === 'sent') {
              Alert.alert('Success', 'Email sent successfully', [{ text: 'OK' }]);
            } else {
              Alert.alert('Error', 'Failed to send email', [{ text: 'OK' }]);
            }
          })
          .catch(error => {
            console.log('Error:', error);
          });

            // if(MailComposer.composeAsync(options)){
          //    Alert.alert('Success', 'Email sent successfully', [{ text: 'OK' }]); 
          // }
          // else{
          //   Alert.alert('Failed', 'Failed to sent the email', [{ text: 'OK' }]); 
          // }

        } else {
          console.log('Email is not available on this device');
        }
      };
    
    return (
    <View style={styles.screen} > 
    <View>
        <Text style={styles.headerText}>Midterm</Text>
        <Text style={styles.headerTextSmall}>a_paul136860</Text>
       </View>     
      <View style={{ height: 350 }}>
      <FlatList
        data={contactList}
        renderItem={
          itemData => (
            <PersonContactList 
              id={itemData.item.key}
              onAdd={() => sendMessageWithEmail(itemData.item)}
              item={itemData.item.val_FirstName +"  "+ itemData.item.val_LastName+ " - "+ itemData.item.val_Contact }
            />
          )
        }
        contentContainerStyle={styles.cardcontainer}
      />
     </View>
     </View>        

    );
}

export default FirstScreen;