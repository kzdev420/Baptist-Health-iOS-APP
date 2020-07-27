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

export const Section = ({data}) => {
    return(
        <View key={data.icon} style={styles.section}>
            <View style={styles.iconStyle}>
                <Icon size={30} name={data.icon} type='font-awesome-5' color='#FFFFFF'/>
            </View>
            <View style={styles.text}>
                <Text style={styles.title}>
                    {data.title}
                </Text>
                <Text style={styles.description}>
                    {data.description}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        paddingVertical: 19,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderBottomColor: "#D6D8DB",
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconStyle: {
        borderRadius: 50,
        backgroundColor: "#39B98E",
        width: 49,
        height: 49,
        paddingTop: 10,
        margin: "auto",
    },
    text: {
        marginLeft: 20,
        paddingRight: 40,
    },
    title: {
        color: "#3C485E",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 0,
        marginBottom: 10
    },
    description: {
        color: "#3C485E",
        fontSize: 12,
    }
})