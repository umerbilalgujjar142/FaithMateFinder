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
    else if (!email.includes(".com")) {
        alert("Please enter valid email")
    }
    else {
        let response = await axios.post('http://10.0.2.2:3000/auth/api/user/login', {
            email,
            password
        })
        return response
    }

}

export const addPersonality = async (fun, book, food, dress, humor, hobbies,userId) => {

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

export const addHobbies = async (selectedItems,selectedItems1,selectedItems2,selectedItems3,userId) => {

    const USERTOKEN = await AsyncStorage.getItem('token')

    if ((selectedItems == "") || (selectedItems1 == "") || (selectedItems2 == "") || (selectedItems3 == "")) {
        alert("Please fill all the fields")
    }
    else {
        const requestData = {
          selectedItems,
          selectedItems1,
          selectedItems2,
          selectedItems3,
          userId
        };

        console.log("response of th requested data is-->>",requestData);

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


