import React from "react";
import boy from "../assets/food-boy.png";

function Header(props) {
  const { search, onInputChange, onClickSearch } = props;

  return (
    //Header section
    <div className="jumbotron">
      <h3 className="display-1 title">Food Recipe</h3>
      <img src={boy} alt="boy" className="img-fluid" id="boy" />
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
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
