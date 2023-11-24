import axios from 'axios';
import {API} from './config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const addNewUser = async (
  fullname,
  gender,
  email,
  password,
  confirmPassword,
  profession,
) => {
  if (password != confirmPassword) {
    alert('Password and Confirm Password not match');
    return;
  } else if (password.length < 6) {
    alert('Password must be 5 character long');
  } else if (
    fullname == '' ||
    gender == '' ||
    email == '' ||
    password == '' ||
    confirmPassword == '' ||
    profession == ''
  ) {
    alert('Please fill all the fields');
  } else if (!email.includes('@')) {
    alert('Please enter valid email');
  } else if (!email.includes('.com')) {
    alert('Please enter valid email');
  } else {
    let response = await axios.post(
      'http://192.168.8.102:3000/auth/api/user/register',
      {
        fullname,
        gender,
        email,
        password,
        profession,
      },
    );
    return response;
  }
};

//login api
export const loginUser = async (email, password) => {
  console.log('email', email, 'password', password);
  if (email == '' || password == '') {
    alert('Please fill all the fields');
  } else if (!email.includes('@')) {
    alert('Please enter valid email');
  } else if (password.length < 5) {
    alert('Password must be 5 character long');
  } else {
    try {
      let response = await axios.post(
        'http://192.168.8.102:3000/auth/api/user/login',
        {
          email,
          password,
        },
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
};

export const addPersonality = async (
  fun,
  book,
  food,
  dress,
  humor,
  hobbies,
  userId,
) => {
  const USERTOKEN = await AsyncStorage.getItem('token');

  if (
    fun == '' ||
    book == '' ||
    food == '' ||
    dress == '' ||
    humor == '' ||
    hobbies == ''
  ) {
    alert('Please fill all the fields');
  } else {
    let response = await axios.post(
      'http://192.168.8.102:3000/auth/api/user/personality',
      {
        fun,
        book,
        food,
        dress,
        humor,
        hobbies,
        userId,
      },
      {
        headers: {
          'x-access-token': USERTOKEN,
        },
      },
    );
    return response;
  }
};

export const addHobbies = async (
  selectedItems,
  selectedItems1,
  selectedItems2,
  selectedItems3,
  userId,
) => {
  const USERTOKEN = await AsyncStorage.getItem('token');

  if (
    selectedItems == '' ||
    selectedItems1 == '' ||
    selectedItems2 == '' ||
    selectedItems3 == ''
  ) {
    alert('Please fill all the fields');
  } else {
    const requestData = {
      fun: selectedItems,
      food: selectedItems1,
      movie: selectedItems2,
      sport: selectedItems3,
      userId,
    };

    try {
      const response = await axios.post(
        'http://192.168.8.102:3000/auth/api/user/hobbies',
        requestData,
        {
          headers: {
            'x-access-token': USERTOKEN,
            'Content-Type': 'application/json',
          },
        },
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
};

//forgot Password

export const ForgotPassword = async email => {
  console.log('email', email);
  const USERTOKEN = await AsyncStorage.getItem('token');

  if (email == '') {
    alert('Please enter email');
  } else if (!email.includes('@')) {
    alert('Please enter valid email');
  } else {
    let response = await axios.get(
      'http://192.168.8.102:3000/auth/api/user/sendemail',
      {
        email,
      },
      {
        headers: {
          'x-access-token': USERTOKEN,
        },
      },
    );
    return response;
  }
};

//Enter OTP

export const EnterOTP = async (formattedOTP, email) => {
  const USERTOKEN = await AsyncStorage.getItem('token');

  if (formattedOTP == '') {
    alert('Please enter OTP');
  } else {
    let response = await axios.get(
      'http://192.168.8.102:3000/auth/api/user/verify-otp',
      {
        enteredOTP: formattedOTP,
        email,
      },
      {
        headers: {
          'x-access-token': USERTOKEN,
        },
      },
    );
    return response;
  }
};

//confimr Password

export const ConfirmPassword = async (userId, password) => {
  const USERTOKEN = await AsyncStorage.getItem('token');
  const requestData = {
    userId: userId,
    password: password,
  };
  if (password == '') {
    alert('Please enter password');
  } else if (password.length < 6) {
    alert('Password must be 6 characters long');
  } else {
    try {
      const response = await axios.put(
        'http://192.168.8.102:3000/auth/api/user/updatedPassword',
        requestData,
        {
          headers: {
            'x-access-token': USERTOKEN,
            'Content-Type': 'application/json',
          },
        },
      );
      return response;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
};

//update profile

// Frontend code for UpdateProfile function
export const UpdateProfile = async (bio, age, filePath, userId, ageRange) => {
  const USERTOKEN = await AsyncStorage.getItem('token');

  const formData = new FormData();

  if (filePath) {
    const fileName = filePath[0].fileName.split('.');
    const fileType = filePath[0].type.split('/');

    formData.append('profileimage', {
      uri: filePath[0].uri,
      name: `${fileName[0]}.${fileType[1]}`,
      type: filePath[0].type,
    });
  }

  formData.append('bio', bio);
  formData.append('age', age);
  formData.append('userId', userId);
  formData.append('AgePrefrences', ageRange);

  if (!bio || !age) {
    alert('Please fill all the fields');
  } else {
    try {
      const response = await axios.post(
        'http://192.168.8.102:3000/auth/api/user/profiledata',
        formData,
        {
          headers: {
            'x-access-token': USERTOKEN,
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
};

export const getProfileData = async id => {
  const USERTOKEN = await AsyncStorage.getItem('token');
  try {
    const response = await axios.get(
      'http://192.168.8.102:3000/auth/api/user/getprofiledata?userId=' + id,
      {
        headers: {
          'x-access-token': USERTOKEN,
        },
      },
    );
    return response;
  } catch (error) {
    console.log('---', error);
    throw error;
  }
};

///////// upload the status of the user ///////////////////////
export const UploadStatus = async (Image, longitude, latitude, userId) => {
  const USERTOKEN = await AsyncStorage.getItem('token');
  const formData = new FormData();

  formData.append('longitude', longitude);
  formData.append('latitude', latitude);
  formData.append('userId', userId);
  if (Image) {
    const fileName = Image[0].fileName.split('.');
    const fileType = Image[0].type.split('/');
    formData.append('Image', fileName[0] + '.' + fileType[1]);
    formData.append('Image', {
      uri: Image[0].uri,
      name: `${fileName[0]}.${fileType[1]}`,
      type: Image[0].type,
    });
  }

  try {
    const response = await axios.post(
      `http://192.168.8.102:3000/auth/api/user/uploadStatus`,
      formData,
      {
        headers: {
          'x-access-token': USERTOKEN,
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

/////////////////////// get all the status of the user  ///////////////////////

export const getAllUsersStatus = async (latitude, longitude) => {
  const USERTOKEN = await AsyncStorage.getItem('token');
  try {
    const response = await axios.get(
      `http://192.168.8.102:3000/auth/api/user/getStatus?latitude=${longitude}&longitude=${latitude}`,
      {
        headers: {
          'x-access-token': USERTOKEN,
        },
      },
    );
    return response;
  } catch (error) {
    console.log('---', error);
    throw error; // Rethrow the error to handle it in the calling function (getProfile)
  }
};

export const UploadMatchPosts = async (
  userId,
  paddress,
  filePath,
  latitude,
  longitude,
  country,
) => {
  const USERTOKEN = await AsyncStorage.getItem('token');
  const formData = new FormData();
  if (filePath) {
    const fileName = filePath[0].fileName.split('.');
    const fileType = filePath[0].type.split('/');
    formData.append('Image', fileName[0] + '.' + fileType[1]);
    formData.append('Image', {
      uri: filePath[0].uri,
      name: `${fileName[0]}.${fileType[1]}`,
      type: filePath[0].type,
    });
  }
  formData.append('userId', userId);
  formData.append('location', paddress);
  formData.append('latitude', latitude);
  formData.append('longitude', longitude);
  formData.append('country', country);

  try {
    const response = await axios.post(
      'http://192.168.8.102:3000/auth/api/bestmatch',
      formData,
      {
        headers: {
          'x-access-token': USERTOKEN,
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

///////////////// get the list of the posts //////////////////////
export const getAlluserPost = async (latitude, longitude, page, Gender) => {
  console.log('----->>>', latitude, longitude, page, Gender);
  const USERTOKEN = await AsyncStorage.getItem('token');
  try {
    const response = await axios.get(
      `http://192.168.8.102:3000/auth/api/getBestMatch?latitude=${latitude}&longitude=${longitude}&page=${page}&userGender=${Gender}`,
      {
        headers: {
          'x-access-token': USERTOKEN,
        },
      },
    );
    return response;
  } catch (error) {
    console.log('---', error);
    throw error; // Rethrow the error to handle it in the calling function (getProfile)
  }
};

export const getFilteredPosts = async (selectedCountry, minAge, maxAge) => {
  const USERTOKEN = await AsyncStorage.getItem('token');

  const requestData = {
    country: selectedCountry,
    minAge: minAge,
    maxAge: maxAge,
  };
  try {
    const response = await axios.post(
      `http://192.168.8.102:3000/auth/api/getBestMatchFilter`,
      requestData,
      {
        headers: {
          'x-access-token': USERTOKEN,
        },
      },
    );
    return response;
  } catch (error) {
    console.log('---', error);
    throw error;
  }
};

export const YouHaveGotMatch = async (id, longitude, latitude) => {
  const USERTOKEN = await AsyncStorage.getItem('token');

  try {
    const response = await axios.get(
      `http://192.168.8.102:3000/auth/api/getSingleBest?id=${id}&currentLng=${longitude}&currentLat=${latitude}`,
      {
        headers: {
          'x-access-token': USERTOKEN,
        },
      },
    );
    return response;
  } catch (error) {
    console.log('---', error);
    throw error;
  }
};

export const UpdateLikedStatus = async (id, liked, UserId) => {
  const USERTOKEN = await AsyncStorage.getItem('token');
  try {
    const ResponseData = {
      id: id,
      liked: liked,
      likerId: UserId,
    };
    const response = await axios.post(
      `http://192.168.8.102:3000/auth/api/updateLikeStatus`,
      ResponseData,
      {
        headers: {
          'x-access-token': USERTOKEN,
          'Content-type': 'application/json',
        },
      },
    );
    return response;
  } catch (error) {
    console.log('---', error);
    throw error;
  }
};

export const UpdateFavouriteStatus = async (id, favourite, UserId) => {
  const USERTOKEN = await AsyncStorage.getItem('token');

  try {
    const ResponseData = {
      id: id,
      favourite: favourite,
      favourerId: UserId,
    };
    const response = await axios.post(
      `http://192.168.8.102:3000/auth/api/updateFavouriteStatus`,
      ResponseData,
      {
        headers: {
          'x-access-token': USERTOKEN,
        },
      },
    );
    return response;
  } catch (error) {
    console.log('---', error);
    throw error;
  }
};

export const getBasedOnLiked = async (userId, page) => {
  const USERTOKEN = await AsyncStorage.getItem('token');
  try {
    const response = await axios.get(
      `http://192.168.8.102:3000/auth/api/getBasedLikedStatus?userId=${userId}`,
      {
        headers: {
          'x-access-token': USERTOKEN,
        },
      },
    );
    return response;
  } catch (error) {
    console.log('---', error);
    throw error;
  }
};

export const getBasedOnFavourite = async (userId, page) => {
  const USERTOKEN = await AsyncStorage.getItem('token');
  try {
    const response = await axios.get(
      `http://192.168.8.102:3000/auth/api/getFavouriteStatus?userId=${userId}&page=${page}`,
      {
        headers: {
          'x-access-token': USERTOKEN,
        },
      },
    );
    return response;
  } catch (error) {
    console.log('---', error);
    throw error;
  }
};

//chat api
export const postMessage = async (senderId, receiverId, message) => {
  const USERTOKEN = await AsyncStorage.getItem('token');
  const requestData = {
    senderId: senderId,
    receiverId: receiverId,
    message: message,
  };
  try {
    const response = await axios.post(
      'http://192.168.8.102:3000/auth/api/sendmessage',
      requestData,
      {
        headers: {
          'x-access-token': USERTOKEN,
        },
      },
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getMessages = async (senderId, receiverId) => {
  const USERTOKEN = await AsyncStorage.getItem('token');
  try {
    const response = await axios.get(
    `http://192.168.8.102:3000/auth/api/getmessage/${senderId}/${receiverId}`,
      {
        headers: {
          'x-access-token': USERTOKEN,
        },
      },
    );
    console.log('response--->>>', response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
