import { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  // Declare state variables for each form input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [stateProvince, setStateProvince] = useState("");
  const [country, setCountry] = useState("");
  const [favoriteColors, setFavoriteColors] = useState({
    white: false,
    brown: false,
    black: false,
    gray: false
  });

  // List of U.S. states
  const states = [
    "Alabama", 
    "Alaska", 
    "Arizona", 
    "Arkansas", 
    "California", 
    "Colorado", 
    "Connecticut", 
    "Delaware",
    "Florida", 
    "Georgia", 
    "Hawaii", 
    "Idaho", 
    "Illinois", 
    "Indiana", 
    "Iowa", 
    "Kansas", 
    "Kentucky",
    "Louisiana",
    "Maine", 
    "Maryland", 
    "Massachusetts", 
    "Michigan", 
    "Minnesota", 
    "Mississippi", 
    "Missouri", 
    "Montana", 
    "Nebraska", 
    "Nevada", 
    "New Hampshire",
    "New Jersey", 
    "New Mexico", 
    "New York", 
    "North Carolina", 
    "North Dakota", 
    "Ohio", 
    "Oklahoma", 
    "Oregon", 
    "Pennsylvania", 
    "Rhode Island",
     "South Carolina",
      "South Dakota", 
      "Tennessee", 
      "Texas", 
      "Utah", 
      "Vermont", 
    "Virginia", 
    "Washington",
     "West Virginia",
      "Wisconsin", 
      "Wyoming"
  ];

  // Handle checkbox changes for favorite alpaca colors
  const handleColorChange = (event) => {
    const { name, checked } = event.target;
    setFavoriteColors(prevState => ({
      ...prevState,
      [name]: checked
    }));
  };

  return (
    <>
      <h1>Alpaca Fan Club Registration</h1>
      <form>
        <fieldset>
          <legend>Personal Information</legend>

          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="streetAddress">Street Address</label>
            <input
              id="streetAddress"
              type="text"
              name="streetAddress"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="stateProvince">State/Province</label>
            <select
              id="stateProvince"
              name="stateProvince"
              value={stateProvince}
              onChange={(e) => setStateProvince(e.target.value)}
            >
              <option value="">Select a State</option>
              {states.map(state => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="country">Country</label>
            <input
              id="country"
              type="text"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          <div>
            <legend>Favorite Alpaca Colors</legend>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="white"
                  checked={favoriteColors.white}
                  onChange={handleColorChange}
                />
                White
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="brown"
                  checked={favoriteColors.brown}
                  onChange={handleColorChange}
                />
                Brown
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="black"
                  checked={favoriteColors.black}
                  onChange={handleColorChange}
                />
                Black
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="gray"
                  checked={favoriteColors.gray}
                  onChange={handleColorChange}
                />
                Gray
              </label>
            </div>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default App;