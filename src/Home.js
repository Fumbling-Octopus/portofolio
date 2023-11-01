import React from 'react';
import Header from './Header.js'
import { Outlet, Link } from 'react-router-dom';

export default function Home(props) {
    const meals = [
        {
            id: 1,
            name: 'Breakfast',
            imagePath: 'img/breakfast.png',
            link: '/BreakfastPage'
        },
        {
            id: 2,
            name: 'Lunch',
            imagePath: 'img/lunch.png',
            link: '/LunchPage'
        },
        {
            id: 3,
            name: 'Dinner',
            imagePath: 'img/dinner.png',
            link: '/DinnerPage'
        }
    ];
    const mealTime = meals.map((meal) => (
        <div className='daily_flex-item' key={meal.id}>
            <Link className="btn btn-primary" to={meal.link}>{meal.name}</Link>
            <img className='home-image' src={meal.imagePath} alt={'Picture of ' + meal.name}/>
        </div>
    ));

    return (
        <div>
            <Header name='Home'/>
            <section className="daily_main">
                <div className="daily_container" id="summary">
                    <div className="daily_flex-item">
                        {/* how to make this interactive/pull data from other sources to update */}
                        <em>Your Goals:</em>
                        <p>100/100 - Proteins</p>
                        <p>100/100 - Carbohydrates</p>
                        <p>100/100 - Fats</p>
                    </div>
                </div>
            </section>
            <section className="daily_container" id="meals">
                {mealTime}
            </section>
            <Outlet />
        </div>
    );
}