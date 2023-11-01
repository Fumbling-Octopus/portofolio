import React, { useState } from 'react';

export default function PersonalEditForm() {
    // <!-- Ryan & Michael  -->
    const [bio, setBio] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [heightFt, setHeightFt] = useState("");
    const [heightIn, setHeightIn] = useState("");
    const [weight, setWeight] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [email, setEmail] = useState("");

    const handleFormSubmit = (event) => {
      event.preventDefault();
      // Handle this data and send it to profile to update.
    }


  return(
    <div>
      <header>
        <h1>
            Edit Personal Information
        </h1>
      </header>
        <button type="button"> <a href="profile.html">Go Back</a> </button>
        <button type="button"> Save </button>
      <form>
        <div class="profile-information-container">
            <div class="profile-information">
            <label for="Bio"> Bio:</label>
            <input type="text" id="Bio" name="Biography"/>
            </div>

            <div class="profile-information">
            <label for="FirstName"> First name:</label>
            <input type="text" id="FirstName" name="FirstName"/>
            </div>

            <div class="profile-information">
            <label for="LastName"> Last name:</label>
            <input type="text" id="LastName" name="LastName"/>
            </div>


            <div class="profile-information">
            <label for="age"> Age:</label>
            <input type="text" id="age" name="age"/>
            </div>

            <div class="profile-information">
            <label for="Gender"> Gender:</label>
            <input type="text" id="Gender" name="Gender"/>
            </div>

            <div class="profile-information">
            <label for="HeightFt"> Height (ft.):</label>
            <input type="text" id="HeightFt" name="Height1"/>
            </div>

            <div class="profile-information">
            <label for="HeightIn"> Height (in.):</label>
            <input type="text" id="HeightIn" name="Height2"/>
            </div>

            <div class="profile-information">
            <label for="Weight"> Weight:</label>
            <input type="text" id="Weight" name="Weight"/>
            </div>

            <div class="profile-information">
            <label for="city"> City:</label>
            <input type="text" id="city" name="city"/>
            </div>

            <div class="profile-information">
            <label for="Country"> Country:</label>
            <input type="text" id="Country" name="Country"/>
            </div>

            <div class="profile-information">
            <label for="Email"> Email:</label>
            <input type="text" id="Email" name="Email"/>
            </div>
        </div>
      </form>
    </div>
  );
}