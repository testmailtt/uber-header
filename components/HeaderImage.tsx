import * as React from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';
export const backgroundImage = require("../assets/background.jpeg");

const { height: wHeight, width: wWidth } = Dimensions.get("window");
const HEADER_IMAGE_HEIGHT = wHeight/3
interface HeaderImageProps {}

const HeaderImage = (props: HeaderImageProps) => {
  return (
    <Image source={backgroundImage} style={styles.image}/>
  );
};

export default HeaderImage;

const styles = StyleSheet.create({
  image: {
      position:"absolute",
      top:0,
      left:0,
      width:wWidth,
      height:HEADER_IMAGE_HEIGHT,
      resizeMode:"cover",

  }
});
