import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Tabs from './Tabs'

interface TabHeaderProps {}

const TabHeader = (props: TabHeaderProps) => {
  return (
    <View style={styles.container}>
      <Tabs/>
          <View>
            <View {...{style}}/>
          </View>
      
    </View>
  );
};

export default TabHeader;

const styles = StyleSheet.create({
  container: {}
});
