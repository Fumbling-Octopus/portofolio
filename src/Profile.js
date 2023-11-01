import React from 'react';
import { Outlet, Link } from 'react-router-dom';


export default function Profile() {

  const ProfileBioLines = [
    "Front-end Developer",
    "Father of 16",
    "Professional Pimp",
    "Stanford Alum 2010"
  ];

  const PersonalInfoLines = [
    "Age: 25",
    "Gender: M",
    "Weight: 160 lbs",
    "Height: 6'0",
    "Location: Khalid",
    "City: Seattle",
    "Country: U.S.A.",
    "Email: john.doe@example.com",
  ];

  const ManageGoalsLines = [
    "PROTEIN",
    "CARBOHYDRATES",
    "FAT"
  ];


  const ManageRecipesLines = [
    {
      "name": "Chicken Salad",
      "ingredients": ["Chicken Thigh",
      "Lettuce",
      "Parmeasean Cheese",
      "Pear & Lime Vinegrette",
      "Kale",
      "Cheery Tomatoes",
      "Crutons",
      "Dried Cranberries",
      "Candied Walnuts",
      "Chopped Cucumber"]
    }
  ];



  const Bio = ProfileBioLines.map((item, index) => {
    return <ProfileBio key={index} bioItems={item} />
  });

  const Info = PersonalInfoLines.map((item, index) => {
    return <PersonalInfo key={index} personalItems={item} />
  });

  const Goals = ManageGoalsLines.map((item, index) => {
    return <ManageGoals key={index} goalsItems={item} />
  });

  const Recipes = ManageRecipesLines.map((item, index) => {
    return <ManageRecipes key={index} recipesItems={item} />
  });


  return(
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="recipes.html">Recipes</a></li>
            <li><a href="profile.html">Profile</a></li>
          </ul>
        </nav>
        <h1>
            Edit Personal Information
        </h1>
      </header>
      <div className="content-container">
        <div className="profile-container">
          <div className="profile-picture-box">
            <img className="profile-image" src="../img/nathan.png" alt="Profile" />
          </div>
          <div className="profile-info">
              <p className="profile-name">
                  John Doe
              </p>
              <div className="profile-bio">
                {Bio}
              </div>
          </div>
        </div>
        <p className="profile-box-titles">
            <strong>Personal Info</strong>
        </p>
        <div className="personal-info-box">
            <div className="personal-info">
              {Info}
            </div>
            <a href="editPersonalInfo.html" className="edit-button">Edit</a>
        </div>
        <p className="profile-box-titles">
            <strong>Manage Goals</strong>
        </p>
        <div className="manage-goals-box">
            <div className="manage-goals">
                {Goals}
            </div>
            <Link to='/Profile/GoalManagement' className="edit-button">Edit</Link>
        </div>
        <p className="profile-box-titles">
            <strong>Highlighted Recipe</strong>
        </p>
        <div className="manage-recipes-box">
          <div className="manage-recipes">
            {Recipes}
          </div>
          <div className="buttons-container">
            <a href="favoriteRecipe.html" className="edit-button">Edit</a>
            <a href="#" className="delete-button">Delete</a>
            <a href="#" className="add-button">Add</a>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

function ProfileBio(props) {
  return (
    <p> {props.bioItems} </p>
  );
}

function PersonalInfo(props) {
  return (
    <p>{props.personalItems} </p>
  );
}

function ManageGoals(props) {
  return (
    <p>{props.goalsItems} </p>
  );
}


function ManageRecipes(props) {
  return (
    <div>
      <p>
        <strong>
          <u>{props.recipesItems.name}</u>
        </strong>
      </p>
      <ul>
        {props.recipesItems.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}