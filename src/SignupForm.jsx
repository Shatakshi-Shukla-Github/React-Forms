import { useState } from "react";
function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const updateFirstName = (evt) => {
    setFirstName(evt.target.value);
  };
  const updateLastName = (evt) => {
    setLastName(evt.target.value);
  };
  const fullName = () => {
    console.log(firstName, lastName);
  };
  return (
    <div>
      <div>
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          value={firstName}
          onChange={updateFirstName}
          placeholder="FirstName"
        />
      </div>
      <div>
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          value={lastName}
          onChange={updateLastName}
          placeholder="lastName"
        />
        <button onClick={fullName}>Submit</button>
      </div>
    </div>
  );
}
export default SignupForm;
