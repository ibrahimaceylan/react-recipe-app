import React, { useState } from 'react'
import RecipeList from '../components/RecipeList'
import Search from '../components/Search'
import { recipeData } from '../data/tempList'

const Recipes = () => {

  const [recipes, setRecipes] = useState(recipeData)
  const [search,setSearch] = useState('')


    const handleChange = (e) =>{
        setSearch(e.targe.value)
    }

    const handleSubmit = (e) =>{
      e.preventDefault()
    }

    return (
      <>
        <Search 
          search={search} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
        />
        <RecipeList recipes={recipes}/>
      </>
    )

}

export default Recipes