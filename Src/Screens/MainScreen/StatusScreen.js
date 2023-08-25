import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Assets from '../../Assets/Assets';

const StatusItem = ({ image }) => {

  const serverIP = 'http://192.168.200.190:3000';
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg4ODA0NjA4fQ.Mwlu9I3gLN-SYiaBKWprNtK4ofDUSUInRNj2znkGELo';
  const imageUrl = `${serverIP}/uploads/${image}`;

  const headers = {
    'x-access-token': authToken,
    'Content-Type': 'multipart/form-data',
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl, headers }} style={styles.image} />
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
    color: Assets.ic_Balck
  },
});

export default StatusItem;
