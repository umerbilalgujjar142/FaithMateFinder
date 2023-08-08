import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';

const PostItems = ({ image, props, location }) => {
  return (
    <TouchableOpacity onPress={()=>props.navigation.navigate("GotMatchPeople")} style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.overlay}>
        <View style={styles.footer}>
          <Text style={styles.location}>{location}</Text>
          <View style={styles.icons}>
            <TouchableOpacity style={styles.iconContainer}>
              <Ionicons name="heart-outline" size={24} color={Assets.ic_primaryColor} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <Ionicons name="chatbubble-outline" size={24} color={Assets.ic_primaryColor} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 20,
  },
  image: {
    width: '90%',
    height: 200,
    borderRadius:wp(5),marginTop:wp(5),
    alignSelf:'center'
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '80%',
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
    width: wp(89),
    paddingHorizontal:wp(5)
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
