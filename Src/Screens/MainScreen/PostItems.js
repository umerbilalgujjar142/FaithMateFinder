import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Stars from 'react-native-vector-icons/AntDesign'
import { UpdateLikedStatus, UpdateFavouriteStatus } from '../../API/add'

const PostItems = ({ image, text, location, id, props, cameraCords,likes,favourites }) => {

  const [liked, setLiked] = useState(false)
  const [favourite, setFavourite] = useState(false)

  const UpdateLikedIcons = async () => {
    UpdateLikedStatus(id, liked).then((res) => {
      if (res.data.status == 'success') {
        alert("Liked")
      }
      else {
        alert("Something Went Wrong!")
      }

    }).catch((err) => {
      console.log("err", err)
    })
  }

  const UpdateFavouriteIcons = async () => {
    UpdateFavouriteStatus(id, favourite).then((res) => {
      if (res.data.status == 'success') {
        alert("Favourite")
      }
      else {
        alert("Something Went Wrong!")
      }
    }).catch((err) => {
      console.log("err", err)
    })
  }

  useEffect(() => {
    if (liked) {
      UpdateLikedIcons();
    }
  }, [liked])

  useEffect(() => {
    if (favourite) {
      UpdateFavouriteIcons();
    }
  }, [favourite])

  return (
    <TouchableOpacity onPress={() => props.navigation.navigate("GotMatchPeople", { id: id, cameraCords: cameraCords })} style={styles.container}>
      <Image source={{ uri: "https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_1280.jpg" }} style={styles.image} />
      <View style={styles.overlay}>
        <View style={styles.footer}>
          <Text style={styles.location}>{text}</Text>
          <Text style={styles.location}>{location}</Text>
          <View style={styles.icons}>

            {
              liked || likes ?
                <Ionicons name="heart" size={27} color={Assets.ic_primaryColor} /> :
                <TouchableOpacity onPress={(event) => { event.stopPropagation(); setLiked(true) }} style={styles.iconContainer}>
                  <Ionicons name="heart-outline" size={27} color={Assets.ic_primaryColor} />
                </TouchableOpacity>

            }
            <TouchableOpacity onPress={(event) => { event.stopPropagation() }} style={styles.iconContainer}>
              <Ionicons name="chatbubble" size={27} color={Assets.ic_primaryColor} />
            </TouchableOpacity>

            {
              favourite || favourites ?
                <Stars name="star" size={27} color={Assets.ic_primaryColor} /> :
                <TouchableOpacity onPress={(event) => { event.stopPropagation(); setFavourite(true); }} style={styles.iconContainer}>
                  <Stars name="staro" size={27} color={Assets.ic_primaryColor} />
                </TouchableOpacity>
            }
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 45,
  },
  image: {
    width: '90%',
    height: 200,
    borderRadius: wp(5),
    alignSelf: 'center',
    borderWidth:wp(0.1),
    borderColor:Assets.ic_secondaryColor
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
    paddingHorizontal: wp(5)
  },
  location: {
    color: Assets.ic_primaryColor,
    fontSize: 16,
    fontWeight: 'bold',
    width: wp(27),
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
