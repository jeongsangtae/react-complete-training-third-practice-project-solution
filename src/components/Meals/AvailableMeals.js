import React, { useEffect, useState } from "react";
import Card from "../UI/Card";

import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      setError(null);
      try {
        const response = await fetch(
          "https://food-ordering-app-backen-565f9-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
        );

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

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
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchMeals();
  }, []);

  let content = <p>Not Meals...</p>;

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
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
        {content}
      </Card>
    </section>
  );
};

export default AvailableMeals;
