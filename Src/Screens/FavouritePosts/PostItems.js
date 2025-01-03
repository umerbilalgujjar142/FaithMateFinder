import React,{useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Assets from '../../Assets/Assets';
import Stars from 'react-native-vector-icons/AntDesign'

const PostItems = ({ image, props, location, star, text, id, cameraCords }) => {

  const [storeRandom, setStoreRandom] = React.useState(0);

  useEffect(() => {
    const randomDecimal = Math.random();
  const scaledValue = 0.3 + randomDecimal * 0.5; 
const randomPercentage = scaledValue * 100;
const randomPercentageRounded = Math.round(randomPercentage);
setStoreRandom(randomPercentageRounded);
  }, [])
  



  return (
    <TouchableOpacity onPress={() => props.navigation.navigate("GotMatchPeople", { id: id, cameraCords: cameraCords })} style={styles.container}>

      <Image source={{ uri: `https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_1280.jpg` }} resizeMode='contain' style={styles.image} />
      <View style={styles.overlay}>

        <View style={styles.matchView}>
          <Text style={styles.thirtypercent}>{storeRandom}% match</Text>
        </View>


        <View style={styles.footer}>
          <Text style={styles.location}>{text},</Text>
          <Text style={styles.location}>{location}</Text>
          <View style={styles.icons}>
            {
              star ?
                <>
                  <View style={styles.iconContainer}>
                    <Stars name="star" size={24} color={Assets.ic_primaryColor} />
                  </View>
                  <TouchableOpacity style={styles.iconContainer}>
                    <Ionicons name="chatbubble" size={24} color={Assets.ic_primaryColor} />
                  </TouchableOpacity>
                </>
                :
                null
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
    marginBottom: 10,
  },
  image: {
    width: '90%',
    height: 200,
    borderRadius: wp(5), marginTop: wp(1),
    alignSelf: 'center',
    borderWidth: wp(0.1),
    borderColor: Assets.ic_secondaryColor
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
  matchView: {
    textAlign: 'right',
    alignItems: 'flex-end',
    top: wp(-30),
    borderRadius: wp(10)
  },
  thirtypercent: {
    fontSize: wp(4.5),
    backgroundColor: Assets.ic_primaryColor,
    padding: wp(1),
    color: '#fff',
    borderRadius: wp(1)
  }
});

export default PostItems;
