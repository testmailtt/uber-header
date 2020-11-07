import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface TabProps {
    name:string,
    color:string,

}

const Tab = ({name,color}: TabProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text,{color}]}>{name}</Text>
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    height: 45,
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  text:{
    fontSize: 14,
    fontFamily: "UberMoveRegular",
  }
});
