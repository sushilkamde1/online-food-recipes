import React from "react";
import RecipeItems from "./RecipeItems";

function Recipes(props) {
  const { recipes } = props;

  return (
    <div className="container">
      <div className="card-columns">
        {recipes.map((items) => (
          <RecipeItems
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
