import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Feather as Icon } from "@expo/vector-icons";


const ICON_SIZE = 24;
const PADDING =16;
export const MIN_HEADER_HEIGHT = 45;

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  return (
    <View style={styles.container}>
       <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "white",
        }}
      />
      <View style={styles.header}>
        <View>
            <Icon name="arrow-left" size={ICON_SIZE} color="black" />
        </View>
        <Text style={styles.title}>Miss Miu Europaallee</Text>
        <Icon name="heart" size={ICON_SIZE} color="white" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingTop:PADDING
  },
  header:{
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: PADDING,
    height:MIN_HEADER_HEIGHT
  },
  title: {
    fontFamily: "UberMoveMedium",
    fontSize: 18,
    marginLeft: PADDING,
    flex: 1,
  },
});
