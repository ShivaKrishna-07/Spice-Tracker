import axios from "axios";
import { API_URL } from "../constant";


export const getRecipes = async (searchedQuery) =>{
    try{
        let response = await axios.get(`${API_URL}/search?q=${searchedQuery}`)
        return response.data
    } 
    
    catch (error) {
        console.log('error while calling the getRecipes api', error.message);
        return error.response
    }
}

export const getRecipe = async (searchedQuery) =>{
    try{
        let response = await axios.get(`${API_URL}/get?rId=${searchedQuery}`)
        return response.data
    } 
    
    catch (error) {
        console.log('error while calling the getRecipe api', error.message);
        return error.response
    }
}