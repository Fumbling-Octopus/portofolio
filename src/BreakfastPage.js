import { Functionality } from './Recipes';
import { Link } from 'react-router-dom';

export default function BreakfastPage(props){

  return(
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="index.html">Back</Link></li>
          </ul>
        </nav>
        <h1>Breakfast Page</h1>
      </header>
      <Functionality mealType="Breakfast" filterByMealType={true}/>
    </div>
  )
}
