import React,{useState} from 'react';
import { View,TouchableOpacity ,Modal, Image, StyleSheet } from 'react-native';
import Assets from '../../Assets/Assets';

const StatusItem = ({ image }) => {
  
  const [modalVisible, setModalVisible] = useState(false);
  const [setImage, setSetImage] = useState('')

  return (
    <>
    <TouchableOpacity onPress={()=>{setSetImage("https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_1280.jpg");setModalVisible(true)}} style={styles.container}>
      <Image source={{ uri: `https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_1280.jpg` }} style={styles.image} />
    </TouchableOpacity>
      
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{ flex: 1, backgroundColor: 'black' }}>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={{ flex: 1 }}>
            <Image source={{ uri: setImage }} style={{ width: '100%', height: '100%' }} />
          </TouchableOpacity>
        </View>
      </Modal>

    </>
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
