/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import HeaderImage from "../images/Header.png"

export const Header = () => {
    return(
        <>
            <View style={styles.header}>
                <Image source= {HeaderImage} style={styles.headerImage} />
                <Text style={styles.hello}>Hello</Text>
                <Text style={styles.secondText}>How can we help you today?</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 181,
        opacity: 0.8,
        // background: "linear-gradient(0deg, #313A49 0%, rgba(49,58,73,0) 100%)"
    },
    headerImage: {
        width:"100%",
        height: 181,
    },
    hello:{
        position: "absolute",
        marginTop:88,
        marginLeft:17,
        height: 38,
        width: 136,
        color: "#FFFFFF",
        // fontFamily: "Archivo Black",
        fontSize: 30,
        letterSpacing: 0,
        lineHeight: 38,
    },
    secondText: {
        position: "absolute",
        marginTop: 129,
        marginLeft: 18,
        height: 34,
        width: 131,
        color: "#FFFFFF",
        // fontFamily: "Archivo",
        fontSize: 16,
        fontWeight: "500",
        letterSpacing: 0,
        lineHeight: 17
    }
})