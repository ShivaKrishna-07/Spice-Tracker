import React from 'react'
import {Button } from 'semantic-ui-react'
import Header from './Header'
import { Link} from 'react-router-dom'

function Home() {
  return (
    <Header title = "Our Recipes" bgClass = "bg-image">
        <Button
        content = "Search Recipe"
        as={Link}
        to='/recipes'
        color='blue'
        style={{opacity:1}}
        />
    </Header>
  )
}

export default Home