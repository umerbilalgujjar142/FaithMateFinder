import axios from "axios";
import { API } from "./config";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const addNewUser = async (fullname, gender, email, password, confirmPassword) => {


    if (password != confirmPassword) {
        alert("Password and Confirm Password not match")
        return
    }
    else if (password.length < 6) {
        alert("Password must be 6 character long")

    }
    else if ((fullname == "") || (gender == "") || (email == "") || (password == "") || (confirmPassword == "")) {
        alert("Please fill all the fields")

    }
    else if (!email.includes("@")) {
        alert("Please enter valid email")
    }
    else if (!email.includes(".com")) {
        alert("Please enter valid email")
    }
    else {
        let response = await axios.post('http://10.0.2.2:3000/auth/api/user/register', {
            fullname,
            gender,
            email,
            password
        })
        return response
    }
}

//login api
export const loginUser = async (email, password) => {

    if ((email == "") || (password == "")) {
        alert("Please fill all the fields")
    }
    else if (!email.includes("@")) {
        alert("Please enter valid email")
    }
    else if(password.length < 6){
        alert("Password must be 6 character long")
    }
    else {
        try {
        let response = await axios.post('http://10.0.2.2:3000/auth/api/user/login', {
            email,
            password
        })
        return response
    }
    catch(error){
        console.log(error)
    }

}


}

export const addPersonality = async (fun, book, food, dress, humor, hobbies, userId) => {

    const USERTOKEN = await AsyncStorage.getItem('token')

    if ((fun == "") || (book == "") || (food == "") || (dress == "") || (humor == "") || (hobbies == "")) {
        alert("Please fill all the fields")
    }

    else {
        let response = await axios.post('http://10.0.2.2:3000/auth/api/user/personality', {
            fun,
            book,
            food,
            dress,
            humor,
            hobbies,
            userId
        },
            {
                headers: {
                    'x-access-token': USERTOKEN
                }

            })
        return response
    }
}

export const addHobbies = async (selectedItems, selectedItems1, selectedItems2, selectedItems3, userId) => {

    const USERTOKEN = await AsyncStorage.getItem('token')

    if ((selectedItems == "") || (selectedItems1 == "") || (selectedItems2 == "") || (selectedItems3 == "")) {
        alert("Please fill all the fields")
    }
    else {
        const requestData = {
            fun: selectedItems,
            food: selectedItems1,
            movie: selectedItems2,
            sport: selectedItems3,
            userId
        };

        try {
            const response = await axios.post('http://10.0.2.2:3000/auth/api/user/hobbies', requestData, {
                headers: {
                    'x-access-token': USERTOKEN,
                    'Content-Type': 'application/json'
                }
            });
            return response;
        } catch (error) {
            console.log(error);
        }

    }
}

//forgot Password

export const ForgotPassword = async (email) => {

    console.log("email", email);
    const USERTOKEN = await AsyncStorage.getItem('token')


    if (email == "") {
        alert("Please enter email")
    }
    else if (!email.includes("@")) {
        alert("Please enter valid email")
    }
    else {

        let response = await axios.get('http://10.0.2.2:3000/auth/api/user/sendemail', {
            email
        },
            {
                headers: {
                    'x-access-token': USERTOKEN,
                }
            })
        return response

    }
}

//Enter OTP


export const EnterOTP = async (formattedOTP, email) => {

    const USERTOKEN = await AsyncStorage.getItem('token')


    if (formattedOTP == "") {
        alert("Please enter OTP")
    }
    else {
        let response = await axios.get('http://10.0.2.2:3000/auth/api/user/verify-otp', {
            enteredOTP: formattedOTP,
            email
        }, {
            headers: {
                'x-access-token': USERTOKEN,
            }
        })
        return response
    }
}


//confimr Password

export const ConfirmPassword = async (userId, password) => {
    const USERTOKEN = await AsyncStorage.getItem('token')
    const requestData = {
      userId: userId,
      password: password
    };
    if (password == "") {
      alert("Please enter password")
    } else if (password.length < 6) {
      alert("Password must be 6 characters long")
    } else {
      try {
        const response = await axios.put('http://10.0.2.2:3000/auth/api/user/updatedPassword', requestData, {
          headers: {
            'x-access-token': USERTOKEN,
            'Content-Type': 'application/json'
          }
        })
        return response
      } catch (error) {
        throw new Error(error.response.data.message)
      }
    }
  }
