    import { View, Text , StyleSheet, TouchableOpacity, Pressable} from 'react-native';
    import React, { useState , useEffect} from 'react';
    import { useNavigation } from '@react-navigation/native';
   //import { TouchableOpacity } from 'react-native-gesture-handler';
    import {firebase} from '../config';
    import {FlashList} from '@shopify/flash-list'
    import { Entypo } from '@expo/vector-icons';

    const Home = () => {
        const [notes , setNotes] = useState([]);
        const navigation = useNavigation();

        useEffect(() => {
            firebase.firestore()
            .collection('notes')
            .onSnapshot((querySnapshot) => {
                const newNotes =[];
                querySnapshot.forEach((doc)=>{
                    const {note, title} = doc.data();
                    newNotes.push({note, title, id: doc.id});
                });
                setNotes(newNotes);
            });

        }, []);

        const handleNotePress = (item) => {
            navigation.navigate('Detail', {item});
        }
    return (
        <View style={styles.container}>
       
        <FlashList 
            data={notes}
            numColumns={2}
            estimatedItemSize={100}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => handleNotePress(item)}>
                <View style={styles.noteView}>
                {/* <Pressable
                onPress={()=> navigation.navigate('Detail', {item})}
                > */}
                    <Text style={styles.noteTitle}>
                    {item.title}
                    </Text>
                    <Text style={styles.noteDescription}>
                    {item.note}
                    </Text>
                {/* </Pressable> */}
                </View>
                </TouchableOpacity>
            )}
            />
            
        
        {/* <Button title='Add Notes' onPress={ () => navigation.navigate('NotesAdd')}/> */}
        <TouchableOpacity
            style={{
                backgroundColor: '#8A7AE0' , 
                // padding:,
                borderRadius: 80,
                width:'50%',
                height:50,
                top:490,
                alignItems:'center',
                justifyContent:'center',
                // marginBottom:30,
                position:'absolute',

                margin:'25%',
                elevation:4,
                shadowColor:'blue',
                
                }}
            onPress={()=>navigation.navigate('NotesAdd')}>
                <Entypo name='plus' size={45} color='lavender'/>
                {/* <Text style={{ 
                    color: 'lavender',
                    fontWeight:'bold',
                    fontSize:15,
                     }}> ADD NOTES </Text> */}
        </TouchableOpacity>  
         {/* can remove TouchableOpacity , its just for adding color */}
        </View>
    )
    }

    export default Home

    const styles = StyleSheet.create ({
    container: {
    flex:1,
    
    // alignItems:'center',
    backgroundColor: '#c9f5'
    },
    noteView: {
        flex: 1, 
        // marginTop:10,
        top:6,
        backgroundColor:'lavender',
        width:'110%',
        margin: 12,
        padding: 10, 
        borderRadius: 10,
        shadowColor:'indigo',
        shadowOffset:{width:0, height: 2},
        shadowOpacity:0.8,
        shadowRadius:2,
        elevation:4,
        left:3,
        alignItems:'center'  
},
    noteTitle: {
        fontSize:23,
        fontWeight:'bold'
    },
     noteDescription: {
        fontSize:18,
        marginTop:5,
        fontWeight:'bold',
     }
})