import React, { useState, useEffect } from 'react';
import Header from './Header.js';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { getDatabase, ref, onValue, remove} from 'firebase/database';

// for functionality, we plan to make an delete function
export function Recipe(props) {
  const [selected, setSelected] = useState(false);

  const handleSelectChange = () => {
    setSelected(!selected);
    props.onSelectionChange(props.id, !selected); // Pass the id here instead of the name
  }
  const ingredient = props.ingredients.map((ingredient, index) => (
    <li key={index}> {ingredient} </li>
  ))

  const nutrients = props.nutrient.map((nutrient, index) => (
    <li key={index}> {nutrient} </li>
  ))

const mealType = props.mealType;

  


  return (
    <div className='header-checkbox'>
      <input
        aria-label='checkbox'
        type="checkbox"
        checked={selected}
        onChange={handleSelectChange}
        className='foodCheckBox'
      />
      <label htmlFor="checkbox" aria-labelledby='checkbox element'>
      <h1 className="meal"> {props.name} </h1>
        <h2>Ingredient</h2>
        <ul className="ingredients">
          { ingredient }
        </ul>
        <h2>Nutrient</h2>
        <ul className="ingredients">
          { nutrients }
        </ul>
        <h2>Meal Type: {mealType}</h2>

      </label>

    </div>
  );
}

export default function Recipes() {
  return(
    <div>
      <Header name="Recipes"/>
      <Functionality filterByMealType={false}/>
    </div>


  );
}

export function Functionality({ mealType, filterByMealType: initialFilter }) {
  const [selectedRecipes, setSelectedRecipes] = useState({});
  const [recipeValue, setRecipeValue] = useState([]); // Initialize with a default value
  const db = getDatabase();
  const meal = ref(db, "foods");
  const [selectedRecipeList, setSelectedRecipeList] = useState([]); // Declare selectedRecipeList as a state variable
  const [searchQuery, setSearchQuery] = useState('');// for search term
  const [filterByMealType, setFilterByMealType] = useState(initialFilter); // New state variable

  const handleSelectionChange = (recipeId, isSelected) => {
    setSelectedRecipes({ ...selectedRecipes, [recipeId]: isSelected });
  };

  useEffect(() => {
    const newList = Object.entries(selectedRecipes)
      .filter(([key, value]) => value === true)
      .map(([key]) => key);
    setSelectedRecipeList(newList); // Use the setter function to update selectedRecipeList
    console.log(newList);
  }, [selectedRecipes]);

  useEffect(() => {
    const unsubscribe = onValue(meal, function(snapshot) {
      const allRecipeObj = snapshot.val();

      if (allRecipeObj) {
        const allRecipeArray = Object.keys(allRecipeObj).map(key => {
          return { ...allRecipeObj[key], id: key };
        });

        setRecipeValue(allRecipeArray);
        console.log(allRecipeArray);
      } else {
        setRecipeValue([]);
      }
    });

    return () => unsubscribe();
  }, []);

  function handleDelete() {
    const currentRecipes = Array.isArray(recipeValue) ? [...recipeValue] : [];
    let newSelectedRecipes = selectedRecipes ? {...selectedRecipes} : {};

    for (const recipeId in newSelectedRecipes) {
      if (newSelectedRecipes[recipeId]) {
        const recipe = currentRecipes.find(item => item.id === recipeId);
        if (recipe) {
          const recipeRef = ref(db, `foods/${recipe.id}`);
          remove(recipeRef);
        }
        delete newSelectedRecipes[recipeId];
      }
    }
    setSelectedRecipes(newSelectedRecipes);
  }

  const filteredRecipes = recipeValue.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const AllObj = filteredRecipes.map((recipe, index) => {
    return <Recipe
      key={index}
      id={recipe.id} // Pass the id here
      name={recipe.name}
      ingredients={recipe.ingredients}
      nutrient={recipe.nutrients}
      mealType={recipe.mealType}
      selected={selectedRecipes[recipe.id] || false} // Use the id here instead of the name
      onSelectionChange={handleSelectionChange}
    />
  });

  useEffect(() => {
    const unsubscribe = onValue(meal, function(snapshot) {
      const allRecipeObj = snapshot.val();

      if (allRecipeObj) {
        const allRecipeArray = Object.keys(allRecipeObj).map(key => {
          return { ...allRecipeObj[key], id: key };
        });

        if (filterByMealType) {
          const filteredRecipeArray = allRecipeArray.filter(recipe => recipe.mealType === mealType);
          setRecipeValue(filteredRecipeArray);
        } else {
          setRecipeValue(allRecipeArray);
        }
      } else {
        setRecipeValue([]);
      }
    });

    return () => unsubscribe();
  }, [mealType, filterByMealType]);
  

  return (
    <div>
      <div className="search">
          <img src="/img/search.png" alt="search bar" />
          <input
            id="search-content"
            type="text"
            placeholder="Look up a recipe"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}/>
          <button type="button" aria-label="Search button">Search</button>
        </div>
      <section className="all">
        <div className="recipes-add-button">
          <h2 className="recipe-category">All</h2>
          {selectedRecipeList.length > 0 && (
            <div>
              <button className='recipes-delete-button' onClick={handleDelete}>Delete</button>
            </div>
          )}
          <Link className="btn btn-primary" to="/Recipes/FoodAddForm"><img src="/img/add-button.svg" alt="add-button"/></Link>
        </div>
        <section className="All-food-list">
          {AllObj}
        </section>
      </section>

      <Outlet />
    </div>
  );
}













