import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Component/Header";
import Recipes from "./Component/Recipes";
import axios from "axios";

function App() {
  const [searchData, setsearchData] = useState("");
  const [recipes, setRecipes] = useState([]);

  // Api id and key
  const APP_ID = "81184042";
  const APP_KEY = "0194b4924c84171fca8630043a9c6977	";

  // fetch api data
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const resp = await axios.get(
      `https://api.edamam.com/search?q=${searchData}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    // set api data to setRecipes
    setRecipes(resp.data.hits);
  };

  // get serach value and set in setserchData
  const onInputChange = (event) => {
    setsearchData(event.target.value);
  };
  // onclick recipe search
  const onClickSearch = () => {
    getRecipes();
  };

  return (
    <div className="App">
      <Header
        search={searchData}
        onInputChange={onInputChange}
        onClickSearch={onClickSearch}
      />

      <Recipes recipes={recipes} />
    </div>
  );
}

export default App;
