import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderImage from './components/HeaderImage';
import Header from './components/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderImage />
      <Header />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
