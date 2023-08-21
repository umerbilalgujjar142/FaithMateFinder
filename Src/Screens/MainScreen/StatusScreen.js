import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Assets from '../../Assets/Assets';

const StatusItem = ({ username, image }) => {
  return (
    <View style={styles.container}>
      <Image source={{uri:image }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  username: {
    fontSize: 15,
    color:Assets.ic_Balck
  },
});

export default StatusItem;
