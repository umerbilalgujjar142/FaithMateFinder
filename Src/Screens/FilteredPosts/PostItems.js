import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Stars from 'react-native-vector-icons/AntDesign'

const PostItems = ({ image, props, location, star,text }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" }} style={styles.image} />
      <View style={styles.overlay}>


        <View style={{ textAlign: 'right', alignItems: 'flex-end', top: wp(-30), borderRadius: wp(10) }}>
          <Text style={{ fontSize: wp(4.5), backgroundColor: Assets.ic_primaryColor, padding: wp(1), color: '#fff', borderRadius: wp(1) }}>30% match</Text>
        </View>


        <View style={styles.footer}>
          <Text style={styles.location}>{text}</Text>
          <Text style={styles.location}>{location}</Text>
          <View style={styles.icons}>
            <TouchableOpacity style={styles.iconContainer}>
              <Ionicons name="heart" size={24} color={Assets.ic_primaryColor} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <Ionicons name="chatbubble" size={24} color={Assets.ic_primaryColor} />
            </TouchableOpacity>

            {
              star &&
                <TouchableOpacity style={styles.iconContainer}>
                  <Stars name="star" size={24} color={Assets.ic_primaryColor} />
                </TouchableOpacity>
                
            }
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 10,
  },
  image: {
    width: '90%',
    height: 200,
    borderRadius: wp(5), marginTop: wp(1),
    alignSelf: 'center'
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '95%',
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(95),
    paddingHorizontal: wp(5)
  },
  location: {
    color: Assets.ic_primaryColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginHorizontal: 5,
  },
});

export default PostItems;
