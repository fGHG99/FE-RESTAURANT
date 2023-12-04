import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "1",
    name: "Chicken Steak",
    description: "Chicken Steak dengan brown sauce",
    price: 45.000,
  },
  {
    id: "2",
    name: "Spaghetti",
    description: "Spaghetti dengan saus Bolognese",
    price: 35.000,
  },
  {
    id: "3",
    name: "Wagyu Steak",
    description: "Daging Wagyu Import",
    price: 60.000,
  },
  {
    id: "4",
    name: "Es Teh Manis Dingin/Panas",
    description: "Teh manis ada dingin dan panas",
    price: 10.000,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
