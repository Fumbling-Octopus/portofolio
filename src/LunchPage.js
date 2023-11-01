import { Functionality } from './Recipes';
import { Link } from 'react-router-dom';

export default function LunchPage(props){

  return(
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="index.html">Back</Link></li>
          </ul>
        </nav>
        <h1>Lunch Page</h1>
      </header>
      <Functionality mealType="Lunch" filterByMealType={true}/>
    </div>


  )
}