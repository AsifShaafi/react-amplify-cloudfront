import "./App.css";

import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <form>
            <label>
              <span>Name: </span>
              <input
                type="text"
                value={username}
                onChange={handleChange}
                name="name"
                className="Name-input"
              />
            </label>
          </form>
        </p>
        <p>
          Hello 👋{" "}
          <b>
            <i>{username}</i>
          </b>{" "}
          ! Welcome 😎 !!
        </p>
        <p>Hope you have found the post very useful! 😊</p>
        <br />
        <a
          className="App-link"
          href="https://medium.com/@asifimtiazshaafi"
          target="_blank"
          rel="noopener noreferrer"
        >
          More Medium posts
        </a>
      </header>
    </div>
  );
}

export default App;
