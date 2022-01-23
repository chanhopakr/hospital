import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    fetch("api")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => setUsername(data.username));
  }, []);
  return (
    <div className="App">
      {
        <header className="App-header">
          {username ? `Hello ${username}` : "Hello World"}
        </header>
      }
    </div>
  );
}

export default App;
