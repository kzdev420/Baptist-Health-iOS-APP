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
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Header } from './src/components/Header'
import { AlertMessage } from './src/components/AlertMessage'
import { Section } from './src/components/Section'
// import { BottomNavbar } from './src/components/BottomNavbar'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <AlertMessage />
            {
              datas.map((data) => (
                <>
                  <Section data={data} />
                </>
              ))
            }
            {/* <BottomNavbar /> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const datas = [
  {
    title: "Video Visits",
    description: "Instantly visit with a physician or nurse, anytime 24/7 and access your scheduled visits.",
    icon: "video",
  },
  {
    title: "Appointments",
    description: "Find a doctor and schedule appointments.",
    icon: "calendar-alt",
  },
  {
    title: "Locations",
    description: "Find locations, get directions or get turn by turn directions within a hospital.",
    icon: "map-marker-alt",
  },
  {
    title: "Medical Records",
    description: "View your medical information, test results, refill prescriptions and message with your doctor.",
    icon: "file"
  },
  {
    title: "Pay a Bill",
    description: "Pay bills online",
    icon: "credit-card"
  },
]

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
