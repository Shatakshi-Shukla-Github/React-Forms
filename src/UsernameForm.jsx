import { useState } from "react";
function UsernameForm() {
  const [username, setUsername] = useState("timmy");
  const updateUsername = (evt) => {
    setUsername(evt.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={updateUsername}
        placeholder="username"
      />
      <button>Submit</button>
    </div>
  );
}
export default UsernameForm;
