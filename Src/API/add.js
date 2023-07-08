import axios from "axios";
import { API, USERTOKEN } from "./config";

export const addNewUser = async (fullname, gender, email, password, confirmPassword) => {

    console.log("nam---->>", fullname, gender, email, password, confirmPassword);

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