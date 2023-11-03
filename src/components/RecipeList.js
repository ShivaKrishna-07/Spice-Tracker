import { Container, Grid, Header } from "semantic-ui-react";
import React from "react";
import RecipeListItem from "./RecipeListItem";

function RecipeList({ recipes, searchedQuery }) {
  return (
    <Container>
      <Header
        size="huge"
        content={`Recipe List for ${searchedQuery}`}
        textAlign="center"
      />
      <Grid columns={4} doubling>
        {
          recipes && recipes.map((recipe) => {
            return(
            <Grid.Column>
              <RecipeListItem recipes={recipe}/>
            </Grid.Column>
            ) 
          }) 
        }
      </Grid>
    </Container>
  );
}

export default RecipeList;
