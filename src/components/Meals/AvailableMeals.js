import React, { useEffect, useState } from "react";
import Card from "../UI/Card";

import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://food-ordering-app-backen-565f9-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
        );
        const data = await response.json();

        const loadedMeals = [];

        for (const key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }
        setMeals(loadedMeals);
      } catch {}
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  let loadingContent = <p>Not Meals...</p>;

  if (isLoading) {
    loadingContent = <p>Loading...</p>;
  }

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
        {isLoading && loadingContent}
      </Card>
    </section>
  );
};

export default AvailableMeals;
