import React from "react";

function RecipeItems(props) {
  return (
    <div className="card py-2 text-center">
      <img
        src={props.image}
        alt="recipe"
        className="img-fluid mx-auto w-50 rounded-circle"
      />
      <div className="card-body">
        <h5>{props.name}</h5>
      </div>
    </div>
  );
}

export default RecipeItems;
