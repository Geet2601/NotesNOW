import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React, { useState} from 'react'
import {firebase} from '../config'
import { useNavigation } from '@react-navigation/native'

const Detail = ({route}) => {
    const navigation = useNavigation();
    const [noteText , setNoteText] = useState(route.params.item.note);
    const [noteTitle, setNoteTitle] = useState(route.params.item.title);

    const handleUpdate = () => {
        if(noteTitle && noteTitle.length>0){
            firebase.firestore()
            .collection('notes')
            .doc(route.params.item.id)
            .update({
                title: noteTitle,
                note:noteText,
            })
            .then (()=> {
                navigation.navigate('Home'); 
            })
            .catch((error)=> {
                alert(error);
            })
        }
    }
    //for deletion of notes
    const handleDelete = () => {
        firebase.firestore()
        .collection('notes')
        .doc(route.params.item.id)
        .delete()
        .then(() => {
            navigation.navigate('Home');
        })
        .catch((error) => {
            alert(error);

        })
    }
return (
    <View style={styles.container}>
      <TextInput 
      placeholder='Title'
      value={noteTitle}
      onChangeText={(text) => setNoteTitle(text)}
      style={styles.inputTitle}
      />
      <TextInput 
      placeholder='Note'
      value={noteText}
      onChangeText={(text) => setNoteText(text)}
      style={styles.inputNote}
      multiline={true}
      />
      <View style={styles.buttonView}> 
      <TouchableOpacity
        style={styles.button}
        onPress={handleDelete}
      >
      <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button}
        onPress={handleUpdate}
      >
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'lavender'
    },
    inputTitle: {
        fontSize:18,
        fontWeight:'bold',
        marginTop:20,
        marginBottom:10,
        height:50,
        width:'92%',
        borderWidth:1,
        borderRadius:10,
        padding:10,
    },
    inputNote: {
        fontSize:15,
        fontWeight:'bold',
        height:300,
        width:'92%',
        borderWidth:0.5,
        borderRadius:10,
        padding:10,
    },
    buttonView:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'97%'
    },
    button:{
        backgroundColor:'pink',
        padding:10,
        borderRadius:10,
        marginTop:10,
    },
    bottonText: {
        color: '#fff',
        fontSize:18,
        
    }
})