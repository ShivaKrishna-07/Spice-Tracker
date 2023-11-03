import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Grid, Image, Header, Segment } from "semantic-ui-react";
import { getRecipe } from "./services/api";

export default function RecipeDetails() {
  const [recipe, setRecipe] = useState({});

  const { recipeId } = useParams();

  useEffect(() => {
    const getData = async () => {
      let result = await getRecipe(recipeId);
      if (result && result.recipe) {
        setRecipe(result.recipe);
      }
    };
    getData();
  }, []);
  return (
    Object.keys(recipe).length > 0 ? (
    <Grid container stackable columns={2} className="detailsPageContent">
      <Grid.Column>
        <Button
            as={Link} 
            to={"/recipes"} 
            content="Back to recipe list"
            style={{marginBottom:40}}
            color="black"
         />
        <Image src={recipe.image_url} />
      </Grid.Column>
      <Grid.Column >
        <Header size='medium'  >{recipe.title}</Header>
        <p>Provided By {recipe.publisher}</p>
        <Button
            as={'a'} 
            href={recipe.publisher_url} 
            target="_blank"
            content="Publisher and Web page"
            color="blue"
         />
        <Button
            as={'a'} 
            href={recipe.source_url} 
            target="_blank"
            content="Recipe URL"
            style={{margin:40}}
            color="green"
         />
         <Header size='large' content='Ingredients'/>
        <Segment.Group>
            {
                recipe && recipe.ingredients.map( data => (
                    <Segment>
                    <h5>{data}</h5>
                    </Segment>
                ))
            }
        </Segment.Group>
      </Grid.Column>
    </Grid>
  ) : null
  )
}
