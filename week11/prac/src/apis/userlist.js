import axios from "axios";
import {UserFilter} from '../components/user/PageSelection';

export const baseURL = "https://gominzipsession.o-r.kr" ;

const offset = 5;

export const getPerPage = async(page) =>{
    const response = await axios.get(`${baseURL}/lionlist?page=${page}/?offset=${offset}&limit=${offset}`);
    return response.data;
}

export const getGenderUser = async(gender) =>{
    const response = await axios.get(`${baseURL}/lionlist?gender=${gender}`);
    return response.data;
}

export const getPartUser = async(part) =>{
    const response = await axios.get(`${baseURL}/lionlist?part=${part}`);
    return response.data;
}