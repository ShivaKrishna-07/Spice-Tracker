import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card } from 'semantic-ui-react'

export default function RecipeListItem({recipes}) {
  return (
    <Card style={{height: 350}}>
        <img src={recipes.image_url ? recipes.image_url : './images/default.png'} style={{height: 170}} />
        <Card.Content>
            <Card.Header content={recipes.title}/>
            <Card.Description>
                <h4>{recipes.publisher}</h4>
            </Card.Description>
        </Card.Content>
        <Card.Content>
            <Button
                as={Link}
                to={`/recipes/${recipes.recipe_id}`}
                content="Details"
                color='blue'
                size='tiny'
            />
            <Button
                href={recipes.source_url}
                target="_blank"
                content="More"
                color='green'
                size='tiny'
            />
        </Card.Content>
    </Card>
    )
}
