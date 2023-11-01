// import React, { useState } from 'react';
// import { getDatabase, ref, push } from "firebase/database";


// export default function FoodAddForm() {

//   // Ryan & Michael button feature
//   const [food, setFood] = useState('');
//   const [ingredients, setIngredients] = useState('');
//   const [nutrients, setNutrients] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     const newRecipe = {
//       name: food,
//       ingredients: ingredients.split(', '),
//       nutrients: nutrients.split(','),
//     }
  
//     // Get a reference to the database
//     const db = getDatabase();
  
//     // Use push to add new data to the 'foods' collection in Firebase
//     push(ref(db, 'foods'), newRecipe);
  
//     // Clear the form fields
//     setFood('');
//     setIngredients('');
//     setNutrients('');
//     if (!food || !ingredients || !nutrients) {
//       alert('Please fill all fields.');
//       return;
//     }
    
//   };
  

//   // we will send this new recipe to All for recipes once we figure out routing

//   return(
//     <div>
//       <a href='./'> Cancel </a>
//       <header>
//         <h1>
//             Add Food
//         </h1>
//       </header>
//       <form className="addFood-container" onSubmit={handleSubmit}>
//           <label htmlFor="food"> Food</label>
//           <input 
//           className="addFood-food" 
//           type="text" 
//           id="food" 
//           name="food" 
//           placeholder="enter food item"
//           value={food}
//           onChange={(e) => setFood(e.target.value)}
//           />          
//           <label htmlFor="ingredient"> Ingredient</label>
//           <input 
//           className="addFood-ingredient" 
//           type="text" 
//           id="ingredient" 
//           name="ingredient" 
//           placeholder="list ingredients (split with comma)"
//           value={ingredients}
//           onChange={(e) => setIngredients(e.target.value)}
//           />          
//           <label htmlFor="nutrients"> Nutrients </label>
//           <input 
//           className="addFood-nutrients" 
//           type="text" 
//           id="nutrients" 
//           name="nutrients" 
//           placeholder="list nutrients (split with comma)"
//           value={nutrients}
//           onChange={(e) => setNutrients(e.target.value)}
//           />          
//           <button id="submitButton" type="submit" className="btn btn-warning" aria-label="Submit content">Submit</button>
//         </form>

//     </div>
//   );
// }

import React, { useState } from 'react';
import { getDatabase, ref, push } from "firebase/database";

export default function FoodAddForm() {

  // Ryan & Michael button feature
  const [food, setFood] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [nutrients, setNutrients] = useState('');
  const [mealType, setMealType] = useState('Breakfast');  // New state for meal type

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newRecipe = {
      name: food,
      ingredients: ingredients.split(', '),
      nutrients: nutrients.split(','),
      mealType: mealType, // Include meal type in data
    }
  
    // Get a reference to the database
    const db = getDatabase();
  
    // Use push to add new data to the 'foods' collection in Firebase
    push(ref(db, 'foods'), newRecipe);
  
    // Clear the form fields
    setFood('');
    setIngredients('');
    setNutrients('');
    setMealType('Breakfast');  // Reset meal type
    if (!food || !ingredients || !nutrients || !mealType) {
      alert('Please fill all fields.');
      return;
    }
    
  };

  // we will send this new recipe to All for recipes once we figure out routing

  return(
    <div>
      <a href='./'> Cancel </a>
      <header>
        <h1>
            Add Food
        </h1>
      </header>
      <form className="addFood-container" onSubmit={handleSubmit}>
          <label htmlFor="food"> Food</label>
          <input 
          className="addFood-food" 
          type="text" 
          id="food" 
          name="food" 
          placeholder="enter food item"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          />          
          <label htmlFor="ingredient"> Ingredient</label>
          <input 
          className="addFood-ingredient" 
          type="text" 
          id="ingredient" 
          name="ingredient" 
          placeholder="list ingredients (split with comma)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          />          
          <label htmlFor="nutrients"> Nutrients </label>
          <input 
          className="addFood-nutrients" 
          type="text" 
          id="nutrients" 
          name="nutrients" 
          placeholder="list nutrients (split with comma)"
          value={nutrients}
          onChange={(e) => setNutrients(e.target.value)}
          />
          <label htmlFor="mealType">Meal Type</label>   {/* Added meal type */}
          <select 
            id="mealType" 
            name="mealType" 
            value={mealType} 
            onChange={(e) => setMealType(e.target.value)}
          >
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
          <button id="submitButton" type="submit" className="btn btn-warning" aria-label="Submit content">Submit</button>
        </form>

    </div>
  );
}


