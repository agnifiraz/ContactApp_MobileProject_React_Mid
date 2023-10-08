import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  addButtonContainer: {
    backgroundColor:'white',
    borderColor:'lightgrey',
    borderWidth: 1,
    width:'15%',
    marginLeft:'85%',
},
addButtonText:{
  fontSize:40, 
  color: 'black',
  textAlign: 'center'
},
  screen: { 
    paddingBottom:50,
    paddingRight:50,
    paddingLeft: 50 ,
    paddingTop: 10
  },
  cardcontainer: {
    overflow: 'hidden',
    backgroundColor: 'white',
    borderWidth: 0,
    marginBottom: 10
   },
  listItem: {
    padding: 15,
    backgroundColor: '#ccc',
    borderColor: 'lightgray',
    borderWidth: 1,
    backgroundColor:'white',
    alignItems:'center'
},
    headerText:{
        fontSize:40, 
        color: 'black',
        textAlign: 'center', 
        fontWeight: 'bold', 
    },
    headerTextSmall:{
      fontSize:20, 
      color: 'black',
      textAlign: 'center', 
      marginBottom: 30
  },
    form: {
        margin: 30,
        marginTop: 40 
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: 'bold', 
        textAlign: 'center'
    },
    labelRegular:{
      fontSize: 18,
      alignItems: 'flex-start'

    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2,
        textAlignVertical: 'top'
    },
    buttonContainer: {
      paddingVertical: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    button: {
        width: '40%',
    },
    saveInputContainer: {
      marginTop:'5%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
  },
  saveInput: {
      width: '80%',
      borderColor: 'lightgray',
      borderWidth: 1,
      padding: 10,
      marginBottom: 10
  },
  saveButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '60%'
  },
  saveButton: {
      width: '40%',
      borderRadius: 5
  }     
});