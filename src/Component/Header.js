import React from "react";
import tree from "../assets/tree_S_2-removebg-preview.png";

function Header(props) {
  const { search, onInputChange, onClickSearch } = props;

  return (
    <div className="jumbotron">
      <img src={tree} alt="tree" className="img-fluid" />
      <h1 className="display-1">
        <span className="material-icons brand-icon">restaurant</span>Food Recipe
      </h1>
      <div className="input-group mb-3 w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Search Your Recipe"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={search}
          onChange={onInputChange}
        />
        <div className="input-group-append">
          <button className="btn btn-warning" onClick={onClickSearch}>
            Search Recipe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
