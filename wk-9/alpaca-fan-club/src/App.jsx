 {/* IMPORTS */}
import './App.css'
import { useForm } from "react-hook-form";
import { useState } from "react";

 {/* APP COMPONENT */}
function App() {
  const { register, handleSubmit } = useForm();
  const [userData, setUserData] = useState(null);

  function handleMyForm(data) {
    console.log('this is the data:', data);
    setUserData(data);
  }

  {/* FORM & USER INPUT FIELDS */}
  return (
    <div>

      <h1>Tri-State Area Alpaca Fan Club Registration Form</h1>

      <form onSubmit={handleSubmit(handleMyForm)}>
        <fieldset>
          <legend>Personal Information</legend>

          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" {...register("firstName")} />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" {...register("lastName")} />
          </div>

          <div>
            <label htmlFor="streetAddress">Street Address</label>
            <input type="text" id="streetAddress" {...register("streetAddress")} />
          </div>

          <div>
            <label htmlFor="state">State</label>
            <select id="state" {...register("state")}>
              <option value="NY">New York</option>
              <option value="NJ">New Jersey</option>
              <option value="CT">Connecticut</option>
            </select>
          </div>

          <div>
            <label htmlFor="country">Country</label>
            <input type="text" id="country" {...register("country")} />
          </div>

          <div>
            <p>Favorite Alpaca Colors</p>
            <label><input type="checkbox" value="white" {...register("favAlpacaColors")} /> White</label>
            <label><input type="checkbox" value="gray" {...register("favAlpacaColors")} /> Gray</label>
            <label><input type="checkbox" value="blonde" {...register("favAlpacaColors")} /> Blonde</label>
            <label><input type="checkbox" value="brunette" {...register("favAlpacaColors")} /> Brunette</label>
            <label><input type="checkbox" value="black" {...register("favAlpacaColors")} /> Black</label>
          </div>

        </fieldset>

        <button type="submit">Submit</button>
      </form>

{ /*DISPLAY USER DATA*/ }
      {userData && (
        <div>
          <h2>Thank You For Your Response!</h2>
          <p>First Name: {userData.firstName}</p>
          <p>Last Name: {userData.lastName}</p>
          <p>Street Address: {userData.streetAddress}</p>
          <p>State: {userData.state}</p>
          <p>Country: {userData.country}</p>
          <p>
            Favorite Alpaca Colors:{" "}
            {userData.favAlpacaColors?.join(", ")}
          </p>
        </div>
      )}

    </div>
  )
}

export default App;