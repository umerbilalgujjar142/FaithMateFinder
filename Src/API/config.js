import axios from "axios";
import React,{useState,useEffect} from 'react';


export const BaseApiUrl = 'http://10.0.2.2:3000'


export const API = axios.create({
    baseURL: BaseApiUrl,
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': USERTOKEN
    }
})