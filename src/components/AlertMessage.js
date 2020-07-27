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
import { Icon } from 'react-native-elements'


export const AlertMessage = () => {
    return(
        <>
            <View style={styles.alertMessage}>
                <Icon size={24} iconStyle={styles.iconStyle} name='error' type='material' color='#39B98E'/>
                <Text style={styles.text}>
                    COVID-19 Alert message. Read more
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    alertMessage: {
        paddingTop: 11,
        paddingBottom: 11,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF8E3',
        margin: "auto"
    },
   
})