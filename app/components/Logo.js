import React from "react";
import { StyleSheet, Image } from "react-native";

export default function Logo({ children }) {
  return <Image style={styles.img}>{children}</Image>;
}

const styles = StyleSheet.create({
  img: { width: 70, height: 70, padding: 7 },
});

import React from 'react';
import { View, StyleSheet } from 'react-native';

function Logo(props) {
  return (
    <View style={styles.container}></View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default Logo;