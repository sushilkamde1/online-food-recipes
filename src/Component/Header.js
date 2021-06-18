import React from "react";

function Header(props) {
  const { search, onInputChange, onClickSearch } = props;

  return (
    <div className="jumbotron">
      <h1 className="display-1">
        <span className="material-icons brand-icon">chalet</span>Food Recipe
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
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
