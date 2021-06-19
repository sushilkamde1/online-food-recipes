import React from "react";
import "tachyons";

function RecipeItems(props) {
  const { image, name, ingredients, url } = props;

  return (
    // Card Section
    <div className="card text-center bg-light-green br-3">
      <img src={image} className="card-img-top grow" alt="recipe_image" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <ul className="list-group list-group-flush">
          {ingredients.map((ingredients, index) => (
            <li className="list-group-item" key={index}>
              {ingredients}
            </li>
          ))}
        </ul>
        {/* Click More Button */}
        <a href={url} className="btn btn-primary mt-4" target="_blank">
          More Info
        </a>
      </div>
    </div>
  );
}

export default RecipeItems;
