import React, { useEffect } from "react";
import { useState } from 'react'
import Search from "./Search";
import RecipeList from "./RecipeList";
import { getRecipes } from "./services/api";

function RecipeItems() {
  const [searchedQuery, setSearchedQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() =>{
    getSearchedResult();
  }, [searchedQuery])
  
  const getSearchedResult = async () =>{
    let result = await getRecipes(searchedQuery);
    if(result && result.recipes){
      setRecipes(result.recipes);
      console.log(recipes)
    }
    else{
      return(
        <h4>{searchedQuery} is not available</h4>
      )
    }
  }   

  return (
    <>
    <Search setSearchedQuery = {setSearchedQuery}/>
    <RecipeList recipes ={recipes} searchedQuery = {searchedQuery}/>
    </>
  );
}

export default RecipeItems;
