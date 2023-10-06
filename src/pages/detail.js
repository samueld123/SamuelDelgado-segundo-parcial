import React, { useEffect, useState } from "react";
import MealPreviw from "../components/mealPreview";
import { FetchMealById } from "../services/mealtService";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [meal, setMeal] = useState([]);

  useEffect(() => {
    if (id) {
      FetchMealById(id).then((data) => setMeal(data));
    }
  }, [id]);
  return (
    <>
      {meal ? (
        <div className="page">
          <div className="meal-detail-container">
            <h1>{meal.strMeal}</h1>
            <MealPreviw meal={meal} />
            <p><strong>{meal.strInstructions}</strong></p>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Detail;
