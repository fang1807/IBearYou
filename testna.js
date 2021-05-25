import React from 'react';

import{ View,Text,StyleSheet,Image} from 'react-native';


export default function testna() {
    return (
       <View style={styles.container}>
        
           <View style = {styles.header}>
       <Text>I Bear You</Text>
  
       </View>
      

        </View>
    );
}


console.log(getUserProfile($id));

       
const getUserProfile = (id) => client.query(`SELECT * from Userprofile WHERE id = ${id}`, (err, res) => {
 return res;
});

const getCard = (id) => client.query(`SELECT * from Card WHERE id = ${id}`, (err, res) => {
 return res;
});

const getChoices= (id) => client.query(`SELECT * from choices WHERE id = ${id}`, (err, res) => {
 return res;
});

const getQuestion = (id) => client.query(`SELECT * from questionnaires WHERE id = ${id}`, (err, res) => {
 return res;
});

const getUserResult = (id) => client.query(`SELECT * from result WHERE id = ${id}`, (err, res) => {
 return res;
});

const getUserAnswer = (id) => client.query(`SELECT * from answer WHERE id = ${id}`, (err, res) => {
 return res;
});



export default testna;