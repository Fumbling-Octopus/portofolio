import { Functionality } from './Recipes';
import { Link } from 'react-router-dom';

export default function DinnerPage(props){

  return(
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="index.html">Back</Link></li>
          </ul>
        </nav>
        <h1>Dinner Page</h1>
      </header>
      <Functionality mealType="Dinner" filterByMealType={true}/>
    </div>


  )
}