import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import FoodAddForm from './FoodAddForm';
import BreakfastPage from './BreakfastPage';
import LunchPage from './LunchPage';
import DinnerPage from './DinnerPage';
import GoalManagement from './GoalManagement';
import Profile from './Profile';
import Recipes from './Recipes';
import Home from './Home';
import SignInPage from './SignInPage';
import DEFAULT_USERS from './users.json'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';


function App(props) {
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[1])
  const navigateTo = useNavigate();
  const loginUser = (userObj) => {
      setCurrentUser(userObj);
      if(userObj.userId !== null){
        navigateTo('/Home.js'); 
      }
  }

  return (
    <div>
      <main>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='SignInPage' element={<SignInPage currentUser={currentUser} loginUserFunction={loginUser} />}></Route>
          <Route path='BreakfastPage' element={<BreakfastPage />}>
            <Route path='FoodAddForm' element={<FoodAddForm />} />
          </Route>
          <Route path='LunchPage' element={<LunchPage />}>
            <Route path='FoodAddForm' element={<FoodAddForm />} />
          </Route>
          <Route path='DinnerPage' element={<DinnerPage />}>
            <Route path='FoodAddForm' element={<FoodAddForm />} />
          </Route>
          <Route path='Profile' element={<Profile />}>
            <Route path='GoalManagement' element={<GoalManagement />} />
          </Route>
          <Route path='Recipes' element={<Recipes />}>
            <Route path='FoodAddForm' element={<FoodAddForm />} />
          </Route>

          <Route path='*' element={<Navigate to='/' />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;