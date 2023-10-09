import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Assets from '../../Assets/Assets';

const FaithMateFinderCard = ({ name, location, testimonial }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.testimonial}>{testimonial}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    elevation: 3,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color:Assets.ic_Balck
  },
  location: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  testimonial: {
    fontSize: 16,
    fontStyle: 'italic',
    color:Assets.ic_Balck
  },
});

export default FaithMateFinderCard;