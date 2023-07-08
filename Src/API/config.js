import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BaseApiUrl = 'http://10.0.2.2:3000'
export var USERTOKEN = "";
export const API = axios.create({
    baseURL: BaseApiUrl,
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': USERTOKEN
    }
})