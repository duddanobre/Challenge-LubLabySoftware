import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons'; 

import logo from '../../assets/logo.png';

export default function Login(){ 
   
        return(

            <View style={styles.container}>

                <Image source={logo} />

                <TextInput placeholder="Usuário" style={styles.textInput}/>
                <TouchableOpacity
                    style={styles.buttonEntrar}
                >
                    <View style={styles.iconSeta}>
                    <Text style={styles.textEntrar}>ENTRAR </Text>
                    <AntDesign name="arrowright" size={20} color="#000000" />
                    </View>

                </TouchableOpacity>
            </View>
        )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: "#292929"
    },
    textInput:{
        marginHorizontal: 25,
        borderColor: "#E5E5E5",
        backgroundColor: "#FFFFFF",
        color: "#535353",
        borderRadius: 8,
        borderWidth: 1,
        padding: 12
    },
    buttonEntrar:{
        padding: 12,
        backgroundColor: "#FFCE00",
        color: "#030202",
        fontSize: 20,
        marginTop: 10,
        marginHorizontal: 25,
        borderRadius: 8
    },
    textEntrar:{
        textAlign: "center",
        fontWeight: 'bold'
    },
    iconSeta:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        
    }
})