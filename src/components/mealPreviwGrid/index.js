import React from "react";

import "./index.css";
import { Link } from "react-router-dom";
import { useTextSearch } from "../../contexts/TextSearchContext";

const MealPreviwGrid = () => {
  const { meals } = useTextSearch();

  return (
    <>
      {meals ? (
        <div className="meal-grid">
          {meals.map((meal) => (
            <Link to={`meals/${meal.idMeal}`}>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
              ></img>
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default MealPreviwGrid;