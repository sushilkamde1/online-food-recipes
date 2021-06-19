import React from "react";
import RecipeItems from "./RecipeItems";

function Recipes(props) {
  const { recipes } = props;

  return (
    //Recipes render to RecipeItems
    <div className="container">
      <div className="card-columns">
        {recipes.map((items, index) => (
          <RecipeItems
            key={index}
            name={items.recipe.label}
            image={items.recipe.image}
            ingredients={items.recipe.ingredientLines}
            url={items.recipe.shareAs}
          />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
