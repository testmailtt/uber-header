import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Tab from './Tab'

interface TabModel {
    name: string;
    anchor: number;
  }

interface TabsProps {
    tabs:TabModel[],
    active: boolean,
}

const Tabs = ({tabs,active}: TabsProps) => {
  return (
    <View style={styles.overlay}>
    {tabs.map((tab, index) => (
      <Tab
        key={index}
        color={active ? "white" : "black"}
        {...tab}
      />
    ))}
  </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        flexDirection: "row",
    }
});
