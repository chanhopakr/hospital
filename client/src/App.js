import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState(null);
  const [query, setQuery] = useState(null);
  
  useEffect(() => {
    fetch("api")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => setUsername(data.username));
      fetch("api/select")
      .then((res) => {
        console.log(res);
        return res.json();
      }).then((data) => setQuery(data));
  }, []);
  console.log(query);
  return (
    <div className="App">
      {
        <header className="App-header">
          {username ? `Hello ${username}` : "Hello World"}
          {query ? `DB연결 ${query}` : "DB연결 실패"}
        </header>
      }
    </div>
  );
}

export default App;
